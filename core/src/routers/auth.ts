import express, { Router } from 'express'
import Auth from '@controllers/auth'

import middleware from '@src/middleware'

const router: Router = express.Router()

router.post('/login', Auth.login)
router.post('/refresh', Auth.refreshToken)

router.post('/whoami', Auth.whoAmI)

export default router
