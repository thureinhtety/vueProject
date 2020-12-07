<template>
<v-card class="mt-10" max-width="1000px">
    <div class="pa-10">
    <h3>Create Confirm Post</h3>
    <h5 class="my-10">Title : " {{ post.title }} "</h5>
    <h5>Description : " {{ post.description }} "</h5>
    </div>
    <div class="pl-10 pb-10">
    <v-btn @click="create" class="mr-5">create</v-btn>
    <v-btn @click="goBack">cancel</v-btn>
    </div>
</v-card>
</template>

<script src="../../services/pages/post/post-createConfirm.js">
</script>