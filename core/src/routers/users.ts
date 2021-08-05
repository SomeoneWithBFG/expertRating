import express, { Router } from 'express'
import Users from '@controllers/users'

import middleware from '@src/middleware'

const router: Router = express.Router()

router.get('/', middleware.isAdminOrTeacher, middleware.validateJWT, Users.getUserList)
router.get('/:id', middleware.validateJWT, Users.getUserByID)
router.post('/', middleware.isAdminOrTeacher, Users.createUser)
router.put('/', middleware.validateJWT, Users.updateUser)
router.delete('/', middleware.validateJWT, middleware.isAdminOrTeacher, Users.deleteUser)

export default router
