import express, { Router } from 'express'
import Users from '@controllers/users'

import middleware from '@src/middleware'

const router: Router = express.Router()

router.get('/', middleware.validateJWT, Users.getUserList)
router.get('/:id', middleware.validateJWT, Users.getUserByID)
router.post('/', Users.createUser)
router.patch('/', middleware.validateJWT, Users.updateUser)
router.delete('/', middleware.validateJWT, Users.deleteUser)

export default router
