const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('pong');
  });

mongoose.connect('mongodb://127.0.0.1:27017/boomit-users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Boomit is connected to MongoDB database');
})
.catch((error) => {
  console.error('Error connecting to MongoDB database:', error);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// define a schema for your user collection
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {type: String},
  email: {type: String},
  name: {type: String},
  age: {type: Number}
});

// create a model for your user collection
const User = mongoose.model('User', userSchema);

// find user by username
async function findUserByUsername(username) {
  try {
    const user = await User.findOne({ username: username });
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function findUserByemail(email){
  try{
    const Email = await User.findOne({email:email});
    return Email;
  }catch(error){
    console.error(error);
    throw error;
  }
}

async function checkPassword(password, hash) {
  try{
    const match = await bcrypt.compare(password,hash);
    return match;
  }catch(error){
    console.error(error);
    throw error;
  }
}

app.post('api/users', async (req, res) => {   //for registration
  console.log("server receiving data from client"); // check if the server is receiving data from the client-side code
  const { name, username, age, password, email } = req.body;
  
  try {
    // Check if the username already exists
    const existingUser = await findUserByUsername(username);
    const existingemail = await findUserByemail(email);
    if(existingemail){
      return res.status(409).json({status: 'error', message: 'Email already in use'});
    }
    if (existingUser) {
      return res.status(409).json({ status: 'error', message: 'Username already exists' });
    }
    
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ username, password: hashedPassword, email, name, age });
    
    const savedUser = await user.save();
    return res.status(201).json({ status: 'success', message: 'User created successfully' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 'error', message: 'Error creating user' });

  }
});

app.post('/api/login2', async (req, res) => {       //for login
  console.log("server receiving data from client login api used");
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ status: 'error', message: "username not found" });
    }
    const passwordMatch = await checkPassword(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ status: 'error', message: 'Invalid username or password' });
    }
    return res.status(200).json({ status: 'success', message: 'User authenticated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Error authenticating user' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});