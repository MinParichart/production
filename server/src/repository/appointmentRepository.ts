import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import type { Appointment } from '../models/appointment'

export function getAllAppointments() {
  return prisma.appointment.findMany({
    select: {
      id: true,
      topic: true,
      description: true,
      requested_date: true,
      appointment_request_date: true,
      status_appointment_id: true,
      student_confirmation: true,
      status: {
        select: {
          status: true,
        },
      },
      student: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
      advisor: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
    },orderBy:{
      requested_date: 'desc',
    }
  })
}

export function getAppointmentByAdvisorId(id: number) {
  return prisma.appointment.findMany({
    where: { advisor_id: id },
    select: {
      id: true,
      topic: true,
      description: true,
      requested_date: true,
      appointment_request_date: true,
      status_appointment_id: true,
      student_confirmation: true,
      status: {
        select: {
          status: true,
        },
      },
      student: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
      advisor: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
    },
  })
}

export function getAppointmentById(id: number) {
  return prisma.appointment.findUnique({
    where: { id },
    select: {
      id: true,
      topic: true,
      description: true,
      requested_date: true,
      appointment_request_date: true,
      status_appointment_id: true,
      student_confirmation: true,
      status: {
        select: {
          status: true,
        },
      },
      student: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
      advisor: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
    },
  })
}

// updateAppointmentStatus
export async function updateAppointmentStatus(id: number, statusId: number) {
  return prisma.appointment.update({
    where: { id },
    data: {
      status_appointment_id: statusId,
    },
    include: {
      status: true,
      student: true,
      advisor: true,
    },
  });
}

export async function approveAppointment(id: number) {
  return updateAppointmentStatus(id, 1); // 1 = Approved
}

export async function rejectAppointment(id: number) {
  return updateAppointmentStatus(id, 3); // 3 = Rejected
}

export async function setPendingAppointment(id: number) {
  return updateAppointmentStatus(id, 2); // 2 = Pending
}

export async function setUnsuccessfulAppointment(id: number) {
  return updateAppointmentStatus(id, 4); // 4 = Request is not successful
}