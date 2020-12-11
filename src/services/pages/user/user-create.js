export default {
    name: "UserCreate",
    data() {
        return {
            valid: true,
            items: ['Admin', 'User'],
            menu1: false,
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
            },

            nameRules: [value => !!value || "The name field is required."],
            emailRules: [
                value => !!value || "The email field is required.",
                value => /.+@.+\..+/.test(value) || "E-mail must be valid."
            ],
             passRules: [
                 value => !!value || "The password field is required.",
                 value => (value && value.length >= 8) || "Password must be at least 8 character."
                ],
             confirm_passRules: [
                 value => !!value || "The confirm password field is required.",
                 value => value === this.user.password || "The password fields are not match."
             ],
            typeRules: [value => !!value || "The type field is required."],
            profileRules: [value => !!value || "The profile field is required."]

        }
    },
    created() {
        // this.user.name = this.$route.params.data.name
        // this.user.email = this.$route.params.data.email
        // this.user.password = this.$route.params.data.password
        // this.user.confirm_password = this.$route.params.data.confirm_password
        // this.user.type = this.$route.params.data.type
        // this.user.phone = this.$route.params.data.phone
        // this.user.dob = this.$route.params.data.dob
        // this.user.address = this.$route.params.data.address
        // this.user.profile = this.$route.params.data.profile
        // this.user.showImg = this.$route.params.data.showImg
    },
    methods: {
        imageUpload(event) {
            const data = URL.createObjectURL(event);
            this.user.showImg = data
        },
        showCreateConfirmUser() {
            this.$router.push({ name: "user-createConfirm", params: { data: this.user } });
        },
        clear() {
            this.user.name = ''
            this.user.email = ''
            this.user.password = ''
            this.user.confirm_password = ''
            this.user.type = ''
            this.user.phone = ''
            this.user.dob = ''
            this.user.address = ''
            this.user.profile = ''
            this.$refs.form.reset()
        }
    }
}