import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true,
  },
  publishYear: {
    type: Number,
    required: [true, 'Publish year is required'],
    min: [0, 'Publish year must be a positive number'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
    validate: {
      validator: function (v) {
        return v > 0;
      },
      message: 'Price must be greater than 0',
    },
  },
  genre: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('Book', bookSchema);
