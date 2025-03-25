import * as advisorRepository from '../repository/advisorRepository'

export function getAllAdvisors() {
  return advisorRepository.getAllAdvisors()
}

export function getAdvisorById(id: number) {
  return advisorRepository.getAdvisorById(id)
}

export function getStudentByAdvisorId(id: number) {
  return advisorRepository.getStudentByAdvisorId(id)
}

export function getAdvisorIdByUserId(id: number) {
  return advisorRepository.getAdvisorIdByUserId(id)
}

