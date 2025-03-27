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

router.put('/approveAppointment/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const approveAppointment = await appointmentService.approveAppointment(id)
    if (approveAppointment) {
      res.json(approveAppointment)
    } else {
      res.status(404).send('Appointment by this advisor not Found')
    }
})

router.put('/approveAppointment/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const approveAppointment = await appointmentService.approveAppointment(id)
    if (approveAppointment) {
      res.json(approveAppointment)
    } else {
      res.status(404).send('Appointment by this advisor not Found')
    }
})

router.put('/rejectAppointment/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const rejectAppointment = await appointmentService.rejectAppointment(id)
    if (rejectAppointment) {
      res.json(rejectAppointment)
    } else {
      res.status(404).send('Appointment by this advisor not Found')
    }
})

router.put('/setPendingAppointment/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const setPendingAppointment = await appointmentService.setPendingAppointment(id)
    if (setPendingAppointment) {
      res.json(setPendingAppointment)
    } else {
      res.status(404).send('Appointment by this advisor not Found')
    }
})

export default router