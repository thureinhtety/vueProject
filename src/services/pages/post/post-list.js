//import { mapGetters } from "vuex";
export default {
    name: "PostList",
    data() {
        return {
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
                },
                {
                    text: "Posted User",
                    value: "user.name",
                },
                {
                    text: "Posted Date",
                    value: "created_at",
                },
                {
                    text: "",
                    value: "operation",
                },
            ],
            updateData: [],
            postList: [],
            showList: [],
            detail: [],
        };
    },
    computed: {
        // ...mapGetters(["isLoggedIn"]),
        // headers() {
        //     if (!this.isLoggedIn) {
        //         return this.headerList.slice(0, this.headerList.length - 1);
        //     } else {
        //         return this.headerList;
        //     }
        // },
    },
    created() {
        this.$axios
            .get("/post/list")
            .then((response) => {
                this.postList = response.data;
                this.showList = this.postList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        // filterPosts() {
        //     this.showList = this.postList.filter((post) => {
        //         return (
        //             post.title.includes(this.keyword) ||
        //             post.description.includes(this.keyword) ||
        //             post.create_user_id.includes(this.keyword)
        //         );
        //     });
        // },

        /**
         * This is to route post create page.
         */
        showCreatePost() {
            this.$router.push({ name: "post-create" });
        },

        showUpdatePost(data) {
            this.updateData = data,
            this.$router.push({ name: "post-update", params: { data: this.updateData } });
        },

        postDetail(detail) {
            this.dialog = true
            this.detail = detail
        }
    },
};
