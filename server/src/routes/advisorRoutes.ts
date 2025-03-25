import express, { Request, Response } from 'express'
import * as advisorService from '../services/advisorService'
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    res.json(await advisorService.getAllAdvisors())
})

router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const advisor = await advisorService.getAdvisorById(id)
    if (advisor) {
      res.json(advisor)
    } else {
      res.status(404).send('Advisor not found')
    }
})

router.get('/advisor-feedback/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const advisorFeedback = await advisorService.getStudentByAdvisorId(id)
    if (advisorFeedback) {
      res.json(advisorFeedback)
    } else {
      res.status(404).send('Advisor Feedback not found')
    }
})

router.get('/advisorid/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const advisorId = await advisorService.getAdvisorIdByUserId(id)
    if (advisorId) {
      res.json(advisorId)
    } else {
      res.status(404).send('Advisor ID not found')
    }
})

export default router
