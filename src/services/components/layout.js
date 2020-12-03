import { mapGetters } from "vuex";
import constants from "../../constants";

export default {
    data() {
        return {
            title: constants.APP_TITLE,
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userType", "userName"]),
    },
    methods: {
        /**
         * This is to log out from system.
         * @returns void
         */
        logout() {
            this.$store
                .dispatch("logout")
                .then(() => {
                    this.$router.push({ name: "login" });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        /**
         * This is to route profile page.
         * @returns void
         */
        showProfile() {
            // TODO: do something
        },

        /**
         * This is to route userlist page
         */
        showUserList() {
            this.$router.push({ name: "user-list" });
        },

        /**
         * This is to route postlist page
         */
        showPostList() {
            this.$router.push({ name: "post-list" });
        }
    },
};
