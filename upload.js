// Import required modules
const mongoose = require('mongoose');
const fs = require('fs/promises');
const path = require('path');
const dotenv = require('dotenv');

// Initialize dotenv
dotenv.config();

// MongoDB Schema
const WritingSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['philosophy', 'poem', 'story', 'article']
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true
  },
  images: {
    small: String,
    medium: String,
    large: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Writing = mongoose.model('Writing', WritingSchema);

// MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in the .env file');
  process.exit(1);
}

// Function to transform the data
const transformWriting = (writing) => {
  return {
    category: writing.category,
    title: writing.title,
    body: writing.content_body,
    images: {
      small: writing.image_src,
      medium: writing.image_src,
      large: writing.image_src
    },
    createdAt: new Date(writing.published_date)
  };
};

// Function to upload data
async function uploadWritingsToMongoDB() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB successfully');

    // File path
    const filePath = path.join(__dirname, 'src', 'writings_ajith.json');
    console.log('Reading file from:', filePath);

    // Read the JSON file
    const jsonData = await fs.readFile(filePath, 'utf8');
    const writings = JSON.parse(jsonData);
    console.log(`Found ${writings.length} writings to upload`);

    // Transform and upload
    const transformedWritings = writings.map(transformWriting);

    // Upload new data
    const result = await Writing.insertMany(transformedWritings, {
      ordered: false // Continue uploading even if some records fail
    });

    console.log(`Successfully uploaded ${result.length} writings to MongoDB`);
  } catch (error) {
    console.error('Error during upload process:', error);
    if (error.writeErrors) {
      console.log(`Failed uploads: ${error.writeErrors.length}`);
    }
    process.exit(1);
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      console.log('MongoDB connection closed');
    }
  }
}

// Run the upload
uploadWritingsToMongoDB();