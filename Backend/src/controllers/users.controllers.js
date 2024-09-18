// controllers/userController.js
import { User } from "../models/index.js";

export const registerUser = async (req, res) => {
    try {
        const { name, username, phone_no, email, dept_name, designation, password, role } = req.body;
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).send({ error: 'User already exists.' });
        }

        const user = new User({ name, username, phone_no, email, dept_name, designation, password, role });
        console.log("User to be saved:", user);
        await user.save();

        const token = user.generateAuthToken();
        res.status(201).send({ token, user });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: 'Server error.' });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).send({ error: 'Invalid email or password.' });
        }

        const token = user.generateAuthToken();
        res.send({ token, user });
    } catch (error) {
        res.status(500).send({ error: 'Server error.' });
    }
};

export const getProfile = async (req, res) => {
    res.send(req.user); // User is attached to the request by authMiddleware
};