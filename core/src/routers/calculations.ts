import express, { Router } from 'express'
import Calculations from '@controllers/calculations'

import middleware from '@src/middleware'

const router: Router = express.Router()

router.get('/', middleware.validateJWT, middleware.isAdmin, Calculations.getCalculationList)
router.get('/:id', middleware.validateJWT, Calculations.getCalculationByID)
router.get(
    '/user/:userId',
    middleware.validateJWT,
    Calculations.getCalculationListByUserID
)

router.delete('/:id', middleware.validateJWT, Calculations.deleteCalculation)

router.post('/kemeni-snella', middleware.addUserId, Calculations.kemeniSnella)
router.post('/kondorse', middleware.addUserId, Calculations.kondorse)
router.post(
    '/pair-comparison',
    middleware.addUserId,
    Calculations.pairComparsion
)
router.post('/preference', middleware.addUserId, Calculations.preference)
router.post(
    '/sequentially-comparison',
    middleware.addUserId,
    Calculations.sequentiallyComparison
)
router.post('/weighing', middleware.addUserId, Calculations.weighing)

export default router
