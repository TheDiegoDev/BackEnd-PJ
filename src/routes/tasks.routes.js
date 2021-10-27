import { Router } from 'express'

import * as taskCtrl from '../controllers/tasks.controllers'

const router = Router()

router.post('/', taskCtrl.createTasks);

router.get('/', taskCtrl.findAllTasks);

router.get('/done', taskCtrl.findAllDoneTasks);

router.get('/:id', taskCtrl.findOneTask)

router.delete('/:id', taskCtrl.deleteTask);

router.put('/:id', taskCtrl.updateTasks);

export default router;