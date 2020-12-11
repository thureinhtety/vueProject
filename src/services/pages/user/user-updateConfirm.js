export default {
    name: "UserUpdateConfirm",
    data() {
        return {
            user: {
                name: '',
                email: '',
                type: '',
                phone: '',
                dob: '',
                address: '',
                profile: '',
                showImg: ''
            },
        }
    },
    created() {
        this.user = this.$route.params.data
        console.log(this.user.profile)
    },
    methods : {
        create(event) {
            event.preventDefault()
            var value = new FormData()
            value.append('name', this.user.name)
            value.append('email', this.user.email)
            value.append('type', this.user.type)
            value.append('phone', this.user.phone)
            value.append('dob', this.user.dob)
            value.append('address', this.user.address)
            value.append('profile', this.user.profile)
            value.append('_method', 'PUT')

            this.$axios.post(`/user/${this.user.id}`, value)
            this.$router.push({ name: "user-list" });
        },
        goBack() {
            this.$router.push({ name: "user-update", params: { data: this.user } });
        }
    }
}