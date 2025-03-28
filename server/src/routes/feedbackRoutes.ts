import express, { Request, Response } from 'express'
import * as feedbackService from '../services/feedbackService'
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    res.json(await feedbackService.getAllFeedbacks())
})

router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const feedback = await feedbackService.getFeedbackById(id)
    if (feedback) {
      res.json(feedback)
    } else {
      res.status(404).send('Feedback not found')
    }
})

router.get('/feedback-student/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const FeedbackByStudentId = await feedbackService.getFeedbackByStudentId(id)
    if (FeedbackByStudentId) {
      res.json(FeedbackByStudentId)
    } else {
      res.status(404).send(`Feedback by Student not found`)
    }
})

export default router
