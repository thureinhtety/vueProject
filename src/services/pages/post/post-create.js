//import { values } from "core-js/fn/array";

export default {
    name: "PostCreate",
    data() {
        return {
            valid: true,
            error: '',
            post: {
                title: '',
                description: ''
            },
            titleRule: [value => !!value || "The title field is required."],

            desRule: [
                value => !!value || "The description field is required.",
                value => (value && value.length <= 255) || "Description must be less than 255 characters"
            ]
        }
    },
    created() {
        // this.post.title = this.$route.params.data.title
        // this.post.description = this.$route.params.data.description
    },
    methods: {
        showCreateConfirmPost() {
            this.$refs.form.validate(),
            this.$router.push({ name: "post-createConfirm", params: { data: this.post } });
        },
        clear() {
            this.post.title = '',
            this.post.description= '',
            this.$refs.form.reset()
        }
    }
}