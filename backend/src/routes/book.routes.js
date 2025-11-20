import express from 'express';
import { createBook, deleteBook, getAllBooks, getBookById, updateBookById } from '../controller/book.controller.js';

const router = express.Router();

router.get('/', getAllBooks)

router.get('/:id', getBookById)

router.post('/', createBook)

router.put('/:id', updateBookById)

router.delete('/:id', deleteBook)

export default router;