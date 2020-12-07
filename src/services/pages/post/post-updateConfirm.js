export default {
    name: "PostUpdateConfirm",
    data() {
        return {
            switch1: true,
            post: {
                id: '',
                title: '',
                description: '',
                status: ''
            }
        }
    },
    created() {
        this.post = this.$route.params.data,
        this.post.status == 0 ? this.switch1=false : this.switch1=true
    },
    methods: {
        update() {
            this.$axios
                .put(`/post/${this.post.id}`, this.post)
                .then(
                    this.$router.push({ name: "post-list" })
                );
        },
        goBack() {
            this.$router.push({ name: "post-update", params: { data: this.post } });
        }
    }

}

