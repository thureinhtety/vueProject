export default {
    name:"UserProfile",
    data() {
        return {
            VUE_IMG_URL: 'http://localhost:8000',
            detail: {
                name: '',
                email: '',
                type: '',
                phone: '',
                dob: '',
                address: '',
                profile: ''
            }
        }
    },
    created() {
        this.detail = this.$route.params.data
    },
    methods : {
        showUpdateUser(data) {
            this.updateData = data
            this.$router.push({ name: "user-update", params: { data: this.updateData } });
        },
    }
}