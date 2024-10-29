import express from 'express';
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from '../controllers/bookController.js';

const router = express.Router();

// Create a new book
router.post('/add-book', createBook);

// Get all books
router.get('/books', getAllBooks);

// Get a book by ID
router.get('/books/:id', getBookById);

// Update a book
router.put('/books/:id/update', updateBook);

// Delete a book
router.delete('/books/:id/delete', deleteBook);

export default router;