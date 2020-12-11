<template>
<v-card class="mt-10" max-width="500px">
    <div class="pa-10">
    <h3>User Profile</h3><v-btn text color="normal" class="float-right" @click="showUpdateUser(detail)">Edit</v-btn>
    <img class="my-5" :src="VUE_IMG_URL+detail.profile" width="100" height="100">
    <h5>Name : " {{ detail.name }} "</h5>
    <h5 class="my-5">Email Address : " {{ detail.email }} "</h5>
    <h5>Type : " {{ detail.type===0 ? "Admin" : "User" }} "</h5>
    <h5 class="my-5">Phone : " {{ detail.phone }} "</h5>
    <h5>Date of Birth : " {{ detail.dob }} "</h5>
    <h5 class="my-5">Address : " {{ detail.address }} "</h5>
    </div>
    <div class="pl-10 pb-10">
    </div>
</v-card>
</template>

<script src="../../services/pages/user/user-profile.js">
</script>