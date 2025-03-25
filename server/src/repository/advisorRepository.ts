import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export function getAllAdvisors() {
  return prisma.advisor.findMany({
    select: {
      id: true,
      first_name: true,
      last_name: true,
      academic_position: true,
      department_id: true,
      department: {
        select: {
          department_name: true,
        },
      },
    },
  })
}

export function getAdvisorById(id: number) {
  return prisma.advisor.findUnique({
    where: { id },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      academic_position: true,
      department_id: true,
      department: {
        select: {
          department_name: true,
          initials: true,
        },
      },
    },
  })
}

export function getStudentByAdvisorId(id: number) {
  return prisma.advisor.findUnique({
    where: { id },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      academic_position: true,
      department_id: true,
      department: {
        select: {
          department_name: true,
          initials: true,
        },
      },
      students: { 
        select: { 
          id: true,
          student_id_card: true,
          first_name: true,
          last_name: true,
          degree: { 
            select: { 
              degree_name: true
            }
          }, 
          department: { 
            select: { 
              department_name: true
            }
          }
        }
      }
    },
  })
}

export function getAdvisorIdByUserId(id: number) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      advisor_id: true,
      },
    })
}


