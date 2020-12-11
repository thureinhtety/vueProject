<template>
<v-card class="mt-10" max-width="1000px">
    <div class="pa-10">
    <h3>Update Confirm User</h3>
    <img class="my-5" :src="user.showImg" width="100" height="100">
    <h5 class="my-5">Name : " {{ user.name }} "</h5>
    <h5>Email Address : " {{ user.email }} "</h5>
    <h5 class="my-5">Type : " {{ user.type==0 ? 'Admin' : 'User' }} "</h5>
    <h5>Phone : " {{ user.phone }} "</h5>
    <h5 class="my-5">Date of Birth : " {{ user.dob }} "</h5>
    <h5>Address : " {{ user.address }} "</h5>
    </div>
    <div class="pl-10 pb-10">
    <v-btn @click="create" class="mr-5">update</v-btn>
    <v-btn @click="goBack">cancel</v-btn>
    </div>
</v-card>
</template>

<script src="../../services/pages/user/user-updateConfirm.js">
</script>