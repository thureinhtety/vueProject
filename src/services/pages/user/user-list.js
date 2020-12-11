export default {
    name:"UserList",
    data(){
        return{
            VUE_IMG_URL:'http://localhost:8000',
            dialog: false,
            headerList: [
                {
                    text: "ID",
                    value: "id",
                },
                {
                    text: "Name",
                    width: '110px',
                    value: "name",
                },
                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Created User",
                    width: '110px',
                    value: "user.name",
                },
                {
                    text: "Type",
                    value: "type",
                },
                {
                    text: "Phone",
                    value: "phone",
                },
                {
                    text: "Birth Date",
                    width: '110px',
                    value: "dob",
                },
                {
                    text: "Address",
                    value: "address",
                },
                {
                    text: "Created Date",
                    value: "created_at",
                },
                {
                    text: "Updated Date",
                    value: "updated_at",
                },
                {
                    text: "",
                    width: '200px',
                    value: "operation",
                },
            ],
            userList: [],
            showList: [],
            updateData: [],
            detail: [],
            created_from: new Date().toISOString().substr(0, 10),
            created_to: new Date().toISOString().substr(0, 10),
            menu1: false,
            menu2: false,
        };
    },
    mounted() {
        this.$axios
            .get("/user/list")
            .then((response) => {
                this.userList = response.data;
                this.showList = this.userList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        userDetail(detail) {
            this.dialog = true
            this.detail = detail
        },
        showCreateUser() {
            this.$router.push({ name: "user-create" })
        },
        showUpdateUser(data) {
            this.updateData = data
            this.$router.push({ name: "user-update", params: { data: this.updateData } });
        },
        deleteUser(data) {
            if (!confirm("Are you sure to delete?")) {
                return;
            }
            this.$axios
                .delete(`/user/${data.id}`)
        }
    },
}