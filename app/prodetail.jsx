import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const { width } = Dimensions.get('window');

const ProjectPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Dropdown states
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: (
        <View style={styles.dropdownItem}>
          <Image source={require('../assets/images/project2.jpg')} style={styles.passportImage} />
          <Text>Delhi Development Authority</Text>
        </View>
      ),
      value: 'dept1',
    },
    {
      label: (
        <View style={styles.dropdownItem}>
          <Image source={require('../assets/images/project3.jpg')} style={styles.passportImage} />
          <Text>Delhi Urban Arts Commission</Text>
        </View>
      ),
      value: 'dept2',
    },
    {
        label: (
          <View style={styles.dropdownItem}>
            <Image source={require('../assets/images/project4.jpg')} style={styles.passportImage} />
            <Text>National Capital Region Planning Board</Text>
          </View>
        ),
        value: 'dept3',
      },
      {
        label: (
          <View style={styles.dropdownItem}>
            <Image source={require('../assets/images/project5.jpg')} style={styles.passportImage} />
            <Text>National Institute of Urban Affairs</Text>
          </View>
        ),
        value: 'dept4',
      },
      {
        label: (
          <View style={styles.dropdownItem}>
            <Image source={require('../assets/images/project2.jpg')} style={styles.passportImage} />
            <Text>National Building Organization</Text>
          </View>
        ),
        value: 'dept5',
      },
  ]);

  //Project Details
  const project = {
    title: 'Housing Project',
    year: 2025,
    progress: '75%',
    status: 'On Schedule',
    location: 'Delhi ',
    images: 
    [
      require('../assets/images/project3.jpg'),
      require('../assets/images/project2.jpg'),
    ],
    inventory: ['Cement', 'Badarpur', 'Bricks'],
    tasks: [
      { name: 'Task 1', done: true },
      { name: 'Task 2', done: false },
      { name: 'Task 3', done: true },
    ],
    workDivision: [
      { task: 'Task 1', department: 'D1', done: true },
      { task: 'Task 2', department: 'D2', done: true },
      { task: 'Task 3', department: 'D3', done: false },
    ],
  };

  const [message, setMessage] = useState(''); // State to hold current message
  const [messages, setMessages] = useState([]); // State to hold all sent messages
  const scrollViewRef = useRef();
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  // Image Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % project.images.length;
        flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
        return newIndex;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [project.images.length]);

  const renderImage = ({ item }) => (
    <Image
      source={item}
      style={styles.projectImage}
      resizeMode="cover"
    />
  );
  // Function to handle sending the message
  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]); // Add new message to the list
      setMessage(''); // Clear the input field
      // Automatically scroll to the bottom when a message is sent
      setTimeout(() => {
        if (isScrolledToBottom) {
          scrollViewRef.current.scrollToEnd({ animated: true });
        }
      }, 100);
    }
  };
  // Track if the user is scrolling and if they're at the bottom
  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20; // Small buffer

    setIsScrolledToBottom(isAtBottom);
  };

  return (
    <LinearGradient // Use LinearGradient for the background
      colors={['#6CB4EE', '#FFFFFF']} // Gradient from blue to white
      style={styles.gradientBackground}
    >
      <ScrollView style={styles.container}>
        {/* Project Info */}
        <View style={styles.projectInfo}>
          <Text style={styles.projectTitle}>{project.title}</Text>
        </View>

        {/* Horizontal Image Slider */}
        <FlatList
          ref={flatListRef}
          data={project.images}
          renderItem={renderImage}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          pagingEnabled
          onMomentumScrollEnd={(event) => {
            const index = Math.floor(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
          style={styles.imageContainer}
        />

        {/* Buttons for Year of Completion and Progress */}
        <View style={styles.buttonsContainer1}>
          <TouchableOpacity style={styles.button1}>
            <Text>YEAR OF COMPLETION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text>PROGRESS</Text>
          </TouchableOpacity>
        </View>

        {/* Buttons for 3D Model, RTM, and Location */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>3D MODEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>RTM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>LOCATION</Text>
          </TouchableOpacity>
        </View>

        {/* Address */}
        <View style={styles.boxContainer}>
          <Text style={styles.sectionTitle}>Address</Text>
          <Text>{project.location}</Text>
        </View>

        {/* Department Dropdown */}
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select Department"
            onChangeValue={(val) => console.log(val)}
          />
        </View>

        {/* Inventory */}
        <View style={styles.boxContainer}>
          <Text style={styles.sectionTitle}>Inventory</Text>
          {project.inventory.map((item, index) => (
            <Text key={index} style={styles.inventoryText}>{item}</Text>
          ))}
        </View>

        {/* Task Manager */}
        <View style={styles.boxContainer}>
          <Text style={styles.sectionTitle}>Task Manager</Text>
          <Text>Task 1: ✅</Text>
          <Text>Task 2: ❌</Text>
        </View>

        {/* Work Division */}
        <View style={styles.boxContainer}>
          <Text style={styles.sectionTitle}>Work Division</Text>
          <View style={styles.workDivisionTable}>
            <View style={styles.workDivisionHeader}>
              <Text style={styles.workDivisionHeaderText}>Task</Text>
              <Text style={styles.workDivisionHeaderText}>D1</Text>
              <Text style={styles.workDivisionHeaderText}>D2</Text>
              <Text style={styles.workDivisionHeaderText}>D3</Text>
            </View>
            {project.workDivision.map((item, index) => (
              <View key={index} style={styles.workDivisionRow}>
                <Text style={styles.workDivisionText}>{item.task}</Text>
                <Text style={styles.workDivisionText}>{item.done ? '✅' : '❌'}</Text>
                <Text style={styles.workDivisionText}>{item.done ? '✅' : '❌'}</Text>
                <Text style={styles.workDivisionText}>{item.done ? '✅' : '❌'}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Discussion Forum */}
        <KeyboardAvoidingView
          style={styles.discussionForumSection}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
        
          <View style={styles.discussionForumSection}>
            {/* Heading */}
            <Text style={styles.sectionTitle}>Discussion Forum</Text>

            {/* Display sent messages in a scrollable box */}
            <View style={styles.messageBox}>
              <ScrollView
                nestedScrollEnabled={true}
                ref={scrollViewRef}
                onScroll={handleScroll}
                scrollEventThrottle={16} // Optimize performance
                showsVerticalScrollIndicator={true}
              >
                {messages.map((msg, index) => (
                  <View key={index} style={styles.messageContainer}>
                    <Text style={styles.sentMessage}>{msg}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>

            {/* Message Input and Send Button */}
            <View style={styles.messageInputContainer}>
              <TextInput
                style={styles.messageInput}
                placeholder="Enter message..."
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                <Text style={styles.sendButtonText}>SEND</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  projectInfo: {
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop:20,
    marginBottom: 8,
    color: '#2F4F4F',
    textAlign:'center',
  },
  imageContainer: {
    marginBottom: 16,
  },
  projectImage: {
    width: width,
    height: 200,
    marginRight: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#ADD8E6',
    borderRadius: 8,
  },
  buttonsContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button1: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#87CEFA',
    borderRadius: 8,
  },
  dropdownContainer: {
    marginBottom: 16,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passportImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  boxContainer: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#4682B4',
  },
  inventoryText: {
    fontSize: 16,
    marginBottom: 4,
  },
  workDivisionTable: {
    flexDirection: 'column',
    borderTopWidth: 1,
    borderTopColor: '#D3D3D3',
  },
  workDivisionHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingVertical: 8,
    backgroundColor: '#E6E6FA',
  },
  workDivisionHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B0082',
  },
  workDivisionRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  workDivisionText: {
    flex: 1,
    textAlign: 'center',
    color: '#4B0082',
  },
  discussionForumSection: {
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  messageBox: {
    maxHeight: 250, // Limit height for around 5 messages
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    marginBottom: 0,
    flex: 1,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 2,
    borderBottomColor: 'black',
    borderBottomWidth: 0,
  },
  messageList: {
    marginBottom: 0,
    maxHeight: 250, // Slightly less than the container height to allow padding
    flexGrow: 1,
  },
  messageContent: {
    flexGrow: 1, // Ensure content expands within the ScrollView
    justifyContent: 'space-between', // Align messages at the top
    paddingVertical: 6,
  },
  sentMessage: {
    backgroundColor: '#87CEEB',
    padding: 7,
    fontSize: 10,
    color: 'black',
    borderRadius: 5,
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  messageInput: {
    flex: 1,
    borderColor: '#ADD8E6',
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom : 30,
  },
  sendButton: {
    backgroundColor: '#87CEEB',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom:30,
  },
  sendButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ProjectPage;