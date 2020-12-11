export default {
    name: "UserUpdate",
    data() {
        return {
            imageHas: true,
            VUE_IMG_URL: 'http://localhost:8000',
            valid: true,
            selected: '',
            items: ['Admin', 'User'],
            menu1: false,
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

            nameRules: [value => !!value || "The name field is required."],
            emailRules: [
                value => !!value || "The email field is required.",
                value => /.+@.+\..+/.test(value) || "E-mail must be valid."
            ],
            typeRules: [value => !!value || "The type field is required."],
            profileRules: [value => !!value || "The profile field is required."]

        }
    },
    created() {
        this.user = this.$route.params.data
        this.user.type == 0 ? this.selected = 'Admin' : this.selected = 'User'
    },
    methods: {
        imageUpload(event) {
            this.imageHas = false
            const data = URL.createObjectURL(event)
            this.user.showImg = data
        },
        showUpdateConfirmUser() {
            this.$router.push({ name: "user-updateConfirm", params: { data: this.user } });
        },
        clear() {
            this.user.name = ''
            this.user.email = ''
            this.user.type = ''
            this.user.phone = ''
            this.user.dob = ''
            this.user.address = ''
            this.user.profile = ''
            this.$refs.form.reset()
        }
    }
}