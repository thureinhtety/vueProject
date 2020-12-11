export default {
    name: "UserCreateConfirm",
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                confirm_password: '',
                type: '',
                phone: '',
                dob: '',
                address: '',
                profile: '',
                showImg: ''
            }
        }
    },
    created() {
        this.user = this.$route.params.data
    },
    methods: {
        create(event) {
            event.preventDefault()
            var value = new FormData()
            value.append('name', this.user.name)
            value.append('email', this.user.email)
            value.append('password', this.user.password)
            value.append('type', this.user.type)
            value.append('phone', this.user.phone)
            value.append('dob', this.user.dob)
            value.append('address', this.user.address)
            value.append('profile', this.user.profile)

            this.$axios.post(`/user`, value)
            this.$router.push({ name: "user-list" });
        },
        goBack() {
            this.$router.push({ name: "user-create", params: { data: this.user } });
        }
    }

}