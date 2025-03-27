import * as appointmentRepository from '../repository/appointmentRepository'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export function getAllAppointments() {
  return appointmentRepository.getAllAppointments()
}

export function getAppointmentById(id: number) {
  return appointmentRepository.getAppointmentById(id)
}

export function getAppointmentByAdvisorId(id: number) {
  return appointmentRepository.getAppointmentByAdvisorId(id)
}

export function approveAppointment(id: number) {
  return appointmentRepository.approveAppointment(id)
}

export function rejectAppointment(id: number) {
  return appointmentRepository.rejectAppointment(id)
}

export function setPendingAppointment(id: number) {
  return appointmentRepository.setPendingAppointment(id)
}

export function setUnsuccessfulAppointment(id: number) {
  return appointmentRepository.setUnsuccessfulAppointment(id)
}


