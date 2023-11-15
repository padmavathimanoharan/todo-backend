import express from 'express'

import { addTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todo.controllers.js'

const router = express.Router()

// GET all TODOs
router.get('/', getTodo);

// POST a new TODO
router.post('/', addTodo);

// DELETE a TODO by ID
router.delete('/:id', deleteTodo);

// PUT/UPDATE a TODO by ID
router.put('/:id', updateTodo);

export default router