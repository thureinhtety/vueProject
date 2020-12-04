<template>

<v-card class="mt-10" max-width="500px">
    <div class="pa-10">
    <h3>Create Confirm Post</h3>
    <h5 class="my-10">Title :</h5>
    <h5>Description :</h5>
    </div>
    <div class="pl-10 pb-10">
    <v-btn @click="showCreateConfirmPost" class="mr-5">create</v-btn>
    <v-btn>clear</v-btn>
    </div>
</v-card>
</template>

<script src="../../services/pages/post/post-createConfirm.js">
</script>