<template>
  <!-- <form>
    <v-text-field
      v-model="name"
      v-validate="'required|max:10'"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>-->
  <v-card class="pa-10 mt-10" max-width="500px">
    <form>
      <h3>Create Post</h3>
      <v-text-field v-model="post.title" label="Title" outlined class="mt-5"></v-text-field>
      <v-textarea v-model="post.description" outlined label="Description"></v-textarea>
      <v-btn @click="showCreateConfirmPost" class="mr-5">confirm</v-btn>
      <v-btn>clear</v-btn>
    </form>
  </v-card>
</template>

<script src="../../services/pages/post/post-create.js">
</script>