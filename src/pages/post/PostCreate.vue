<template>
  <v-card class="pa-10 mt-10" max-width="500px">
    <v-form ref="form" v-model="valid">
      <h3>Create Post</h3>
        <v-text-field
          v-model="post.title"
          label="Title"
          outlined
          class="mt-5"
          :rules="titleRule"
        ></v-text-field>

        <v-textarea
          v-model="post.description"
          outlined
          label="Description"
          :rules="desRule"
        ></v-textarea>

      <v-btn :disabled="!valid" @click="showCreateConfirmPost" class="mr-5">confirm</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/post/post-create.js">
</script>