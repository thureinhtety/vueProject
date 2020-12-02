export default {
    data() {
        return {
            read:""
        }
    },
    methods:{
        getDataFromServer(){
            this.read="Testing..."
        }
    },
    mounted() {
        this.$axios
            .get("/test")
            .then((response) => {
                this.read = response.data.message;
            })
            .catch((err) => {
                console.log(err);
            });
    },
}