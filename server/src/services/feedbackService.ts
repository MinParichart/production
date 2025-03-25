import * as feedbackRepository from '../repository/feedbackRepository'

export function getAllFeedbacks() {
  return feedbackRepository.getAllFeedbacks()
}

export function getFeedbackById(id: number) {
  return feedbackRepository.getFeedbackById(id)
}

export function getFeedbackByStudentId(id: number) {
  return feedbackRepository.getFeedbackByStudentId(id)
}
