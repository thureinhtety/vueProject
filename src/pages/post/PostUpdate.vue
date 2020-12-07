<template>
  <v-card class="pa-5 mt-10" max-width="500px">
    <v-form ref="form" v-model="valid">
      <h3>Update Post</h3>
      <v-text-field 
      v-model="post.title" 
      label="Title" 
      outlined 
      class="mt-5"
      :rules="titleRule"></v-text-field>
      <v-textarea 
      v-model="post.description" 
      outlined 
      label="Description"
      :rules="desRule"></v-textarea>
      <div>
      <h5 class="mb-5 mr-10 float-left">Status</h5><v-switch v-model="switch1"></v-switch>
      </div>
      <v-btn :disabled="!valid" @click="showUpdateConfirmPost" class="mr-5">confirm</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/post/post-update.js">
</script>