<script setup lang="ts">

</script>

<template>
<div class="container mx-auto p-4">
  <div class="grid grid-cols-12 gap-4">
    <!-- People List -->
    <div class="col-span-4 bg-base-200 p-4 rounded-lg">
      <div class="form-control">
        <label class="input-group">
          <span class="btn"><i class="fa fa-search"></i></span>
          <input type="text" placeholder="Search..." class="input input-bordered w-full" />
        </label>
      </div>
      <ul class="menu mt-4">
        <li class="flex items-center gap-2 p-2 rounded-lg hover:bg-base-300 cursor-pointer">
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="w-10 h-10 rounded-full" alt="avatar">
          <div>
            <p class="font-bold">Vincent Porter</p>
            <small class="text-error">left 7 mins ago</small>
          </div>
        </li>
        <li class="flex items-center gap-2 p-2 rounded-lg bg-primary text-white">
          <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="w-10 h-10 rounded-full" alt="avatar">
          <div>
            <p class="font-bold">Aiden Chavez</p>
            <small class="text-success">online</small>
          </div>
        </li>
      </ul>
    </div>
    
    <!-- Chat Section -->
    <div class="col-span-8 bg-base-100 p-4 rounded-lg shadow-md">
      <div class="flex items-center justify-between border-b pb-2">
        <div class="flex items-center gap-2">
          <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="w-10 h-10 rounded-full" alt="avatar">
          <div>
            <p class="font-bold">Aiden Chavez</p>
            <small class="text-gray-500">Last seen: 2 hours ago</small>
          </div>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-outline"><i class="fa fa-camera"></i></button>
          <button class="btn btn-outline"><i class="fa fa-image"></i></button>
        </div>
      </div>
      
      <div class="h-96 overflow-y-auto p-4">
        <div class="chat chat-end">
          <div class="chat-bubble">Hi Aiden, how are you?</div>
          <small class="chat-footer">10:10 AM, Today</small>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble">Are we meeting today?</div>
          <small class="chat-footer">10:12 AM, Today</small>
        </div>
      </div>
      
      <div class="mt-2 flex gap-2">
        <input type="text" class="input input-bordered flex-1" placeholder="Enter text here..." />
        <button class="btn btn-primary"><i class="fa fa-send"></i></button>
      </div>
    </div>
  </div>
</div>
</template>
