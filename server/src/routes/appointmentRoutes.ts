import express, { Request, Response } from 'express'
import * as appointmentService from '../services/appointmentService'
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    res.json(await appointmentService.getAllAppointments())
})

router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const appointment = await appointmentService.getAppointmentById(id)
    if (appointment) {
      res.json(appointment)
    } else {
      res.status(404).send('Appointment not found')
    }
})

router.get('/appointment-advisor/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const getAppointmentByAdvisor = await appointmentService.getAppointmentByAdvisorId(id)
    if (getAppointmentByAdvisor) {
      res.json(getAppointmentByAdvisor)
    } else {
      res.status(404).send('Appointment by this advisor not found')
    }
})

export default router