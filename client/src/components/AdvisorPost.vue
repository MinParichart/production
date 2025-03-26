<script setup lang="ts">
// import AnnouncementService from '@/services/AnnouncementService'
// import AdvisorService from '@/services/AdvisorService'
// import { ref } from 'vue';
// import type { Advisor } from '@/types';
// import ampp
// // import { addAnnouncementByAdvisorId } from '@/services/AnnouncementService';

// // const announcementForm = ref({AnnouncementService})

// // const submitAnnouncement = async () => {
// //   try {
// //     const advisorId = 1 // หรือดึงจากที่อื่น เช่น Pinia store
// //     await addAnnouncementByAdvisorId(advisorId, announcementForm.value)
// //     alert('Announcement added successfully!')
// //   } catch (error) {
// //     console.error('Error:', error)
// //     alert('Failed to add announcement')
// //   }
// // }

// const advisors = ref<Advisor[]>([])
// const loading = ref<boolean>(true) // Track loading state
// const error = ref<string | null>(null) // Track any error that occurs

// const fetchsubmitAnnouncement = async () => {
//     try {
//         const id = await AdvisorService.getAdvisorIdByUserId()
//         const response = await AnnouncementService.addAnnouncementByAdvisorId(id)
//         announcements.value = response.data
//     } catch (err) {
//         error.value =
//             'Error fetching announcements: ' +
//             (err instanceof Error ? err.message : err)
//     } finally {
//         loading.value = false
//     }
// }


</script>
<template>
<div class="card bg-base-100 shadow-xl p-4">
  <section class="container mx-auto p-4">
      <div class="grid md:grid-cols-1 gap-6">
          <div>
              <h1 class="text-2xl font-bold">📢 Announcement</h1>
          </div>
          <div class="card bg-base-200 shadow-xl">
              <div class="card-body">
                  <form id="announcementForm">
                      <h4 class="text-xl font-bold">Leave an Announcement</h4>
                      <div class="form-control mt-2">
                        <label class="label">
                          <span class="label-text font-semibold">Topic</span>
                        </label>
                        <input type="text" class="input input-bordered w-full" placeholder="Type your topic...">

                      </div>
                      <!-- Topic Input -->
                      <!-- Message Input -->
                      <div class="form-control mt-4">
                          <label class="label">
                              <span class="label-text font-semibold">Message</span>
                          </label>
                          <textarea class="textarea textarea-bordered w-full" rows="5" placeholder="Type your message..."></textarea>
                      </div>

                      <!-- File Upload -->
                      <div class="form-control mt-4">
                          <label class="label">
                              <span class="label-text font-semibold">Upload File</span>
                          </label>
                          <input type="file" class="file-input file-input-bordered w-full" accept="image/*, .pdf">
                      </div>

                      <!-- Submit Button -->
                      <div class="form-control mt-4">
                          <button type="submit" class="btn btn-primary w-full">
                              🚀 Post Announcement
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </section>
</div>
</template>