require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Album = require('./models/albumModel')
const User = require('./models/User')
const app = express()
const cors = require('cors');
const authRoutes = require('./routes/auth');
const port = process.env.PORT || 4000;

const allowedOrigins = ['https://drdiscmarket.ca', 'http://localhost:4000', 'https://drdiscmarket-f8ee92798f99.herokuapp.com/',  'https://drdiscmarket.herokuapp.com'];

// CORS configuration
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json())

// Middleware to redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, 'frontend')));

// The "catchall" handler: for any request that doesn't match one above, send back the front-end's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
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

// connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
});