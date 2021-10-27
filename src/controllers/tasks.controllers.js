import Task from '../models/Task';
import {getPagination} from '../libs/getPagination'

export const findAllTasks = async (req, res) =>{
   try {
      const {size, page } = req.query
      const {limit, offset} = getPagination(page, size)

      const tasks =  await Task.paginate({}, {offset: offset , limit: limit})
      res.json({
         objetos: tasks.docs
      })
   } catch (error) {
     res.status(500).json({
        message: error.message || "Something goes wrong"
     });
   }
 };

 export const findOneTask = async (req, res) =>{
    try {
      const task = await Task.findById(req.params.id)
      res.json(task)
    } catch (error) {
      res.status(500).json({
         message: error.message || "Something goes wrong"
      });
    }
 };

 export const createTasks = async (req, res) =>{
    try {
      const newTask = new Task({
         id: req.body.id,
         name: req.body.name,
         foto: req.body.foto,
         descripcion: req.body.descripcion,
         precio: req.body.precio,
         primero: req.body.primero,
         segundo: req.body.segundo
         //done: req.body.done ? req.body.done : false
        });
      const taskSaved = await newTask.save();
      res.json(taskSaved)
    } catch (error) {
      res.status(500).json({
         message: error.message || "Something goes wrong"
      });
    }
};

export const deleteTask = async (req, res) =>{
  try {
      await Task.findByIdAndDelete(req.params.id)
      res.json({
         message: 'Task were deleted Successfully'
      });
  } catch (error) {
      res.status(500).json({
         message: error.message || "Something goes wrong"
      });
  }
};

export const findAllDoneTasks = async (req, res) =>{
   try {
      const tasks =  await Task.find({done: true})
      res.json(tasks)
   } catch (error) {
      res.status(500).json({
         message: error.message || "Something goes wrong"
      });
   }
};

export const updateTasks = async (req, res) =>{
   try {
      await Task.findByIdAndUpdate(req.params.id, req.body)
      res.json({
         message: 'Task was updated Successfully'
      });
   } catch (error) {
      res.status(500).json({
         message: error.message || "Something goes wrong"
      });
   }
};