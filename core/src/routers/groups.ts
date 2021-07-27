import express, { Router } from 'express'
import Groups from '@controllers/groups'

import middleware from '@src/middleware'

const router: Router = express.Router()

router.get('/', Groups.getGroupList)
router.get('/:id', Groups.getGroupByID)
router.post('/', Groups.createGroup)
router.patch('/', Groups.updateGroup)
router.delete('/', Groups.deleteGroup)

export default router
