<template>
  <v-card>
    <v-card-title>
      User list
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field label="Name" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="2.5">
            <v-text-field label="Email" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="2.5">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              :return-value.sync="created_from"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="created_from"
                  label="Created From"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="created_from" no-title scrollable>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu1.save(created_from)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col md="2.5">
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              :return-value.sync="created_to"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="created_to"
                  label="Created From"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="created_to" no-title scrollable>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu2.save(created_to)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
          <v-btn @click="showCreateUser" class="post-list-btn mr-4" color="primary">Create</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headerList" :items="showList">
        <template v-slot:[`item.name`]="{ item }">
          <a v-if="item.name" @click="userDetail(item)">{{ item.name }}</a>
        </template>
        <template v-slot:[`item.type`]="{ item }">
          {{ item.type == 0 ? "Admin" : "User" }}
        </template>
        <template v-slot:[`item.operation`]="{ item }">
          <v-row>
            <div class="operation-btn">
              <v-btn @click="showUpdateUser(item)" color="primary" class="post-list-btn">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn @click="deleteUser(item)" color="error" class="post-list-btn">Delete</v-btn>
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>User Detail</v-card-title>
        <img class="ml-5 mb-5" :src="VUE_IMG_URL + detail.profile" width="100" height="100"/>
        <v-card-text>Name : {{ detail.name }}</v-card-text>
        <v-card-text>Email : {{ detail.email }}</v-card-text>
        <v-card-text>Type : {{ detail.type === 0 ? "Admin" : "User" }}</v-card-text>
        <v-card-text>Phone : {{ detail.phone }}</v-card-text>
        <v-card-text>Address : {{ detail.address }}</v-card-text>
        <v-card-text>Date of Birth : {{ detail.dob }}</v-card-text>
        <v-card-text>Created At : {{ detail.created_at }}</v-card-text>
        <v-card-text>Created User : {{ detail.user ? detail.user.name : "" }}</v-card-text>
        <v-card-text>Updated At : {{ detail.updated_at }}</v-card-text>
        <v-card-text>Updated User : {{ detail.user ? detail.user.name : "" }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script src="../../services/pages/user/user-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>

