<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import { useAnnouncementStore } from '@/stores/announcement'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import UtilService from '@/services/UtilService'
import type { Advisor } from '@/types'
import AnnouncementService from '@/services/AnnouncementService'
import AdvisorService from '@/services/AdvisorService'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
const store = useAnnouncementStore()
const router = useRouter()
const { announcement } = storeToRefs(store)
const goBack = () => {
    router.go(-1) // กลับไปหน้าก่อนหน้า
}

const galleryContainer = ref<HTMLElement | null>(null)

onMounted(() => {
    if (galleryContainer.value) {
        Fancybox.bind("[data-fancybox='gallery']", {})
    }
})

onUnmounted(() => {
    Fancybox.destroy()
})

interface Announcement {
id: number
  topic: string
  description?: string
  file?: string
  posted_date: Date
  advisor_id?: number
  advisor?: Advisor
}

const announcements = ref<Announcement[]>([])
const loadingAnnouncements = ref(false)
const announcementError = ref<string | null>(null)

// แทนที่ fetchAppointments ด้วยนี้
const fetchAnnouncements = async () => {
  try {
    loadingAnnouncements.value = true
    const advisorId = await AdvisorService.getAdvisorIdByUserId()
    const response = await AnnouncementService.getAnnouncementByAdvisorId(advisorId)
    // วิธีที่ 1: ถ้าต้องการแสดงรายการทั้งหมด
    announcements.value = response.data
    
    // วิธีที่ 2: ถ้าต้องการแสดงเฉพาะรายการแรก (หรือเลือกตาม ID)
    if (response.data.length > 0) {
      store.announcement = response.data[2]
      for(let i = 1 ; i <= response.data.length ; i++) { 
        store.announcement = response.data[i] // เซ็ตค่าให้ Pinia store
      }
    }
  } catch (err) {
    announcementError.value = 'Error fetching announcement: ' + 
      (err instanceof Error ? err.message : 'Unknown error')
  } finally {
    loadingAnnouncements.value = false
  }
}

// ตรวจสอบข้อมูลใน store
onMounted(() => {
    fetchAnnouncements().then(() => {
    console.log('Store announcements:', store.announcement)
    console.log('Local announcements:', announcements.value)
  })
})

onMounted(() => {
    if (galleryContainer.value) {
        Fancybox.bind("[data-fancybox='gallery']", {})
    }
})

onUnmounted(() => {
    Fancybox.destroy()
})

library.add(faRotateLeft)
</script>
<template>
    <div class="flex justify-center mt-12 mb-6 w-4xl m-auto">
        <div class="card card-border bg-base-100 w-full shadow-lg">
            <div class="card-body">
                <h2 class="card-title">{{ announcement?.topic }}</h2>
                <div>
                    {{ UtilService.formatDateTime(announcement?.posted_date || '') }}
                </div>
                <p>
                    {{ announcement?.description }}
                </p>
                <figure ref="galleryContainer" v-html="UtilService.displayFileFromURL(announcement?.file || '').html">
                </figure>
                <div class="card-actions justify-end">
                    <button @click="goBack" class="btn">
                        <font-awesome-icon :icon="['fas', 'rotate-left']" /> ถอยกลับ
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
