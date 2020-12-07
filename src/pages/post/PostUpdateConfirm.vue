<template>
<v-card class="mt-10" max-width="1000px">
    <div class="pa-10">
    <h3>Update Confirm Post</h3>
    <h5 class="my-10">Title : " {{ post.title }} "</h5>
    <h5 class="mb-10">Description : " {{ post.description }} "</h5>
    <h5 class="mb-5 mr-10 float-left">Status</h5><v-switch readonly v-model="switch1"></v-switch>
    </div>
    <div class="pl-10 pb-10">
    <v-btn @click="update" class="mr-5">update</v-btn>
    <v-btn @click="goBack">cancel</v-btn>
    </div>
</v-card>
</template>

<script src="../../services/pages/post/post-updateConfirm.js">
</script>