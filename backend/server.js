require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors');
// Models
const Album = require('./models/albumModel')
const User = require('./models/User')
// connection and routes
const authRoutes = require('./routes/auth');
const port = process.env.PORT || 4000;
const path = require('path');
const { connectDB } = require('./database');
//mail setup
const nodemailer = require('nodemailer');



// connection to the database
connectDB();

// CORS configuration
app.use(cors());

app.use(express.json())

// Middleware to redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});

app.use('/api/auth', authRoutes);

//get and show all items in db
app.get('/albums', async(req, res) => {
  try {
    const albums = await Album.find({})
    res.status(200).json(albums)
  } catch {
    res.status(500).json({message: error.message})
  }
})

// Query for last 4 entries for weekly.js
app.get('/albums/weekly', async (req, res) => {
  try {
    const albums = await Album.find({}).sort({createdAt: -1}).limit(4);
    res.status(200).json(albums);
  } catch {
    res.status(500).json({message: error.message})
  }
});

//get items by id
app.get('/albums/:id', async(req, res) =>{
  try {
    const {id} = req.params;
    const albums = await Album.findById(id);
    res.status(200).json(albums)
  } catch {
    res.status(500).json({message: error.message})
  }
})

//add items 
app.post('/albums', async(req, res) => {
  try {
    const albums = await Album.create(req.body)
    res.status(200).json(albums);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

//update items already in db
app.put('/albums/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const album = await Album.findByIdAndUpdate(id, req.body);

    if(!album){
      return res.status(404).json({message: 'cannot find product with ID ${id}'})
    }
    const updatedAlbum = await Album.findById(id);
    res.status(200).json({updatedProduct});

  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

//delete entry from db

app.delete('/albums/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const album = await Album.findByIdAndDelete(id);
    if(!album){
      return res.status(404).json({message: `cannot find product with ID ${id}`})
    }
    res.status(200).json(album);

  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// forum send email
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // email transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email options
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ethanwalker576@gmail.com',
    subject: 'Contact Us Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

  // The "catchall" handler: for any request that doesn't match one above, send back React's index.html file from the build directory.
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
