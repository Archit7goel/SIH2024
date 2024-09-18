import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    phone_no : {
        type : String,
        required : true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dept_name : {
        type : String,
        required : true,
    },
    designation : {
        type : String,
        required : true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user','admin'],
        required: true,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to generate JWT token
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id, username: this.username, role: this.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // Token valid for 1 hour
    );
    return token;
};

// Method to compare passwords
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;