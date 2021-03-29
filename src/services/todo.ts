const Todo = require('../models').Todo;

export class TodoClass {
  async get() {
    const all = await Todo.findAll();
    return all;
  }
}
