export default {
    name: "PostCreatConfirm",
    data() {
        return {
            post: {
                title: '',
                description: ''
            },
        }
    },
    created() {
        this.post = this.$route.params.data
    },
    methods: {
        create() {
            this.$axios
                .post("/post", this.post)
            this.$router.push({ name: "post-list" });
        },
        goBack() {
            this.$router.push({ name: "post-create", params: { data: this.post } });
        }
    }
}

