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
            <v-text-field label="Created From" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="2.5">
            <v-text-field label="Created To" hide-details="auto"></v-text-field>
          </v-col>
          <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
          <v-btn class="post-list-btn mr-4" color="primary">Create</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headerList" :items="showList">
        <template v-slot:[`item.name`]="{ item }">
          <a v-if="item.name">{{ item.name }}</a>
        </template>
        <template v-slot:[`item.operation`]>
          <v-row>
            <div class="operation-btn">
              <v-btn color="error" class="post-list-btn">Delete</v-btn>
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/pages/user/user-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>

