<script setup lang="ts">

import AdvisorFeedbackTable from '@/components/AdvisorFeedbackTable.vue';
import AnnouncementAdvisorTable from '@/components/AnnouncementAdvisorTable.vue';
import AppointmentAdvisorTable from '@/components/AppointmentAdvisorTable.vue';
import AdvisorProfile from '@/components/AdvisorProfile.vue';

</script>
<template>
  <div class="container mx-auto p-4 m-5">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Profile Sidebar -->
       <AdvisorProfile/>
      

      <!-- Profile Content -->
      <div class="w-full md:w-2/3">
        <div class="card bg-base-100 shadow-xl p-4">
          <textarea class="textarea textarea-bordered w-full" placeholder="What's on your mind today?"></textarea>
          <div class="card-actions justify-between mt-2">
            <div>
              <button class="btn btn-warning">Post</button>
            </div>
            <div class="flex space-x-2">
              <button class="btn btn-ghost btn-circle"><i class="fa fa-map-marker"></i></button>
              <button class="btn btn-ghost btn-circle"><i class="fa fa-camera"></i></button>
              <button class="btn btn-ghost btn-circle"><i class="fa fa-film"></i></button>
              <button class="btn btn-ghost btn-circle"><i class="fa fa-microphone"></i></button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
          <AnnouncementAdvisorTable />
          <AppointmentAdvisorTable/>
          <AdvisorFeedbackTable />
        </div>

      </div>
    </div>
  </div>
</template>