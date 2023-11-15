import Student from "../models/todo.model.js";

// Add a new TODO
export const addTodo = async (req, res) => {
    try {
      const newTodo = new Todo(req.body);
      await newTodo.save();
      res.status(201).send(newTodo);
    } catch (err) {
      res.status(400).send(err);
    }
  };
  
  // Delete a TODO by ID
  export const deleteTodo = async (req, res) => {
    try {
      const todoId = req.params.id;
      const deletedTodo = await Todo.findByIdAndDelete(todoId);
  
      if (!deletedTodo) {
        return res.status(404).send({ error: 'Todo not found' });
      }
  
      res.send(deletedTodo);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  // Get all TODOs
  export const getTodo = async (req, res) => {
    try {
      const todo = await Todo.find();
      res.send(todo);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  // Update a TODO by ID
  export const updateTodo = async (req, res) => {
    try {
      const todoId = req.params.id;
      const updatedTodo = await Todo.findByIdAndUpdate(
        todoId,
        req.body,
        { new: true } // Return the modified document rather than the original
      );
  
      if (!updatedTodo) {
        return res.status(404).send({ error: 'Todo not found' });
      }
  
      res.send(updatedTodo);
    } catch (err) {
      res.status(500).send(err);
    }
  };