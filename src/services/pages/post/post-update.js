export default {
    name: "PostUpdate",
    data() {
        return {
            switch1: false,
            valid: true,
            error: '',
            post: {
                id: '',
                title: '',
                description: '',
                status: ''
            },

            titleRule: [value => !!value || "The title field is required."],

            desRule: [
                value => !!value || "The description field is required.",
                value => (value && value.length <= 255) || "Description must be less than 255 characters"
            ]
        }
    },
    created() {
        this.post = this.$route.params.data,
            this.post.status == 0 ? this.switch1 = false : this.switch1 = true
    },
    methods: {
        showUpdateConfirmPost() {
            this.switch1 == true ? this.post.status = 1 : this.post.status = 0,
                this.$router.push({ name: "post-updateConfirm", params: { data: this.post } });
        },
        clear() {
            this.post.title = '',
            this.post.description = '',
            this.switch1 = false,
            this.$refs.form.reset()
        }
    }
}