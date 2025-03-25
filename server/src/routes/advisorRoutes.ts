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

export default router
