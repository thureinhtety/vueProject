<template>
<v-card>
    <v-card-title>
        Post list
        <v-spacer></v-spacer>
        <v-form ref="form">
            <v-row class="filter-bar">
                <v-col md="2.5">
                    <v-text-field label="Search keyword" hide-details="auto"></v-text-field>
                </v-col>
                <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary" @click="showCreatePost">Create</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Upload</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn>
            </v-row>
        </v-form>
    </v-card-title>
    <v-container>
        <v-data-table :headers="headerList" :items="showList">
            <template v-slot:[`item.title`]="{ item }">
                <a @click="postDetail(item)" v-if="item.title">{{item.title}}</a>
            </template>
            <template v-slot:[`item.operation`]="{ item }">
                <v-row>
                    <div class="operation-btn">
                        <v-btn @click="showUpdatePost(item)" color="primary" class="post-list-btn">Edit</v-btn>
                    </div>
                    <div class="operation-btn">
                        <v-btn color="error" class="post-list-btn">Delete</v-btn>
                    </div>
                </v-row>
            </template>
        </v-data-table>
    </v-container>
    <v-dialog v-model="dialog" width="500">
        <v-card>
        <v-card-title>Post Detail</v-card-title>
        <v-card-text>Title : {{ detail.title }}</v-card-text>
        <v-card-text>Description : {{ detail.description }}</v-card-text>
        <v-card-text>Status : {{ detail.status }}</v-card-text>
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

<script src="../../services/pages/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
