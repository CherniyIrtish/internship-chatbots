const router = require('express').Router({});

import { TodoClass } from '../services/todo';

const Todo = new TodoClass();

const getTodo = async (ctx: any) => {
  const all = await Todo.get();
};

router.get('/', getTodo);

export default router;
