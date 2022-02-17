const root = new Vue (
    {
        el:'#app',
        data: {
            email: ''

        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.email = response.data.response;
            })

        }

    }



);