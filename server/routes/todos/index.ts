import express from 'express';
import { Todos } from '../../db';

const todosRouter = express.Router();

todosRouter.get('/', async (req, res) => {
  try {
    const todos = await Todos.findAll();

    res.status(200).send(todos);
  } catch (e) {
    console.error(e);
  }
});

todosRouter.post('/', async (req, res) => {
  try {
    const result = await Todos.create({ text: req.body.todoText }, {});
    res.status(201).send(result);
  } catch (e) {
    console.error(e);
  }
});

todosRouter.patch('/:todoId', async (req, res) => {
  try {
    const todo = await Todos.findOne({ where: { id: req.params.todoId } });

    if (todo) {
      const keysToUpdate: { [key: string]: any } = {};

      if (typeof req.body.isCompleted === 'boolean') {
        keysToUpdate.isCompleted = req.body.isCompleted;
      }

      if (typeof req.body.text !== 'undefined') {
        keysToUpdate.text = req.body.text;
      }

      const result = await todo.update({ ...keysToUpdate });

      res.status(200).send(result);
    }
  } catch (e) {
    console.error(e);
  }
});

todosRouter.delete('/:todoId', async (req, res) => {
  try {
    const todo = await Todos.findOne({
      where: {
        id: req.params.todoId,
      },
    });

    if (todo) {
      await todo.destroy();
      res.sendStatus(200);
    }
  } catch (e) {
    console.error(e);
  }
});

export default todosRouter;
