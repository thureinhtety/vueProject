export default {
    name: "PostCreate",
    data() {
        return {
            post: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        showCreateConfirmPost() {
            console.log(this.post);
            this.$router.push({ name: "post-createConfirm" });
        },
    //     showCreateConfirmPost: function()  {
    //         this.$axios
    //            .get('/post/createConfirm')
    //            .then(response => (this.post = response.data));
    //         console.log(this.post);
    //    }
    }
}