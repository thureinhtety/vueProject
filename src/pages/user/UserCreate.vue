<template>
  <v-card class="pa-10 mt-10" max-width="500px">
    <v-form ref="form" v-model="valid">
      <h3>Create User</h3>
      <v-text-field v-model="user.name" label="Name" outlined class="mt-5" :rules="nameRules"></v-text-field>
      <v-text-field v-model="user.email" label="Email Address" outlined :rules="emailRules"></v-text-field>
      <v-text-field type="password" v-model="user.password" label="Password" outlined :rules="passRules"></v-text-field>
      <v-text-field type="password" v-model="user.confirm_password" label="Confirm Password" outlined :rules="confirm_passRules"></v-text-field>
      <v-select :items="items" v-model="user.type" label="Type" outlined :rules="typeRules"></v-select>
      <v-text-field v-model="user.phone" label="Phone" outlined></v-text-field>
      <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="user.dob"
            prepend-icon="mdi-calendar"
            label="Date of Birth"
            outlined
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="user.dob" no-title scrollable>
          <v-btn text color="primary" @click="$refs.menu1.save(user.dob)">OK</v-btn>
        </v-date-picker>
      </v-menu>
      <v-textarea v-model="user.address" outlined label="Address"></v-textarea>
      <template>
          <img :src="user.showImg" width="100" height="100">
          <v-file-input v-model="user.profile" accept="image/*" label="Profile" @change="imageUpload" :rules="profileRules"></v-file-input>
      </template>
      <v-btn :disabled="!valid" @click="showCreateConfirmUser" class="mr-5">confirm</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/user/user-create.js">
</script>