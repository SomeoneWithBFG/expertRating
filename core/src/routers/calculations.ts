import express, { Router } from 'express'
import Calculations from '@controllers/calculations'

import middleware from '@src/middleware'

const router: Router = express.Router()

router.get('/', middleware.validateJWT, Calculations.getCalculationList)
router.get('/:id', middleware.validateJWT, Calculations.getCalculationByID)
router.get(
    '/user/:userId',
    middleware.validateJWT,
    Calculations.getCalculationListByUserID
)

router.delete('/:id', middleware.validateJWT, Calculations.deleteCalculation)

router.post('/kemeni-snella', Calculations.kemeniSnella)
router.post('/kondorse', Calculations.kondorse)
router.post('/pair-comparsion', Calculations.pairComparsion)
router.post('/preference', Calculations.preference)
router.post('/sequentially-comparison', Calculations.sequentiallyComparison)
router.post('/weighing', Calculations.weighing)

export default router
