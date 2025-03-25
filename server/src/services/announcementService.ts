import * as announcementRepository from '../repository/announcementRepository'

export function getAllAnnouncements() {
  return announcementRepository.getAllAnnouncements()
}

export function getAnnouncementById(id: number) {
  return announcementRepository.getAnnouncementById(id)
}


export function getAnnouncementByAdvisorId(id: number) {
  return announcementRepository.getAnnouncementByAdvisorId(id)
}
