import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import UserList from "../pages/user/UserList";
import PostCreate from  "../pages/post/PostCreate";
import PostCreateConfirm from "../pages/post/PostCreateConfirm";
import PostUpdate from "../pages/post/PostUpdate";
import PostUpdateConfirm from "../pages/post/PostUpdateConfirm";
//import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/post/create",
        name: "post-create",
        component: PostCreate,
    },
    {
        path: "/post/createConfirm",
        name: "post-createConfirm",
        component: PostCreateConfirm,
    },
    {
        path: "/post/update",
        name: "post-update",
        component: PostUpdate,
    },
    {
        path: "/post/updateConfirm",
        name: "post-updateConfirm",
        component: PostUpdateConfirm,
    },
    {
        path: "/user/list",
        name:"user-list",
        component: UserList,
    },
    {
        path: "/*",
        redirect: "/post/list",
    },
    
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
// router.beforeEach((to, from, next) => {
//     const loggedIn = store.getters.isLoggedIn;
//     if (!loggedIn && to.name != "login") {
//         return next("/login");
//     }
//     next();
// });

export default router;
