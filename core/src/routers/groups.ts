import express, { Router } from 'express'
import Groups from '@controllers/groups'

import middleware from '@src/middleware'

const router: Router = express.Router()

router.get('/', middleware.isAdminOrTeacher, Groups.getGroupList)
router.get('/:id', Groups.getGroupByID)
router.post('/', middleware.isAdminOrTeacher, Groups.createGroup)
router.put('/', middleware.isAdminOrTeacher, Groups.updateGroup)
router.delete('/', middleware.isAdminOrTeacher, Groups.deleteGroup)

export default router
