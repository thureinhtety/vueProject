export default {
    name:"UserList",
    data(){
        return{
            headerList: [
                {
                    text: "ID",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Created User",
                    value: "user.name",
                },
                {
                    text: "Phone",
                    value: "phone",
                },
                {
                    text: "Birth Date",
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
                    value: "operation",
                },
            ],
            userList: [],
            showList: [],
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
    }
}