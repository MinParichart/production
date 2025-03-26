import express, { Request, Response } from 'express'
import * as announcementService from '../services/announcementService'
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    res.json(await announcementService.getAllAnnouncements())
})

router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const announcement = await announcementService.getAnnouncementById(id)
    if (announcement) {
      res.json(announcement)
    } else {
      res.status(404).send('Announcement not found')
    }
})

router.get('/announcement-advisor/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
    const getAnnouncementAdvisor = await announcementService.getAnnouncementByAdvisorId(id)
    if (getAnnouncementAdvisor) {
      res.json(getAnnouncementAdvisor)
    } else {
      res.status(404).send('Announcement of this advisor not found')
    }
})

router.post('/announcement-advisor/:id', async (req: Request, res: Response) => {
  try {
    const advisorId = parseInt(req.params.id); // ดึงค่า ID ที่ปรึกษาจาก params
    const { topic, description, file } = req.body; // ดึงค่าจาก body

    if (!topic || !description) {
      return res.status(400).json({ error: 'Topic and description are required' });
    }

    const addAnnouncementAdvisor = await announcementService.addAnnouncementByAdvisorId(
      advisorId,
      topic,
      description,
      file
    );

    res.status(201).json(addAnnouncementAdvisor);
  } catch (error) {
    console.error('Error posting announcement:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router