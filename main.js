const root = new Vue (
    {
        el:'#app',
        data: {
            emailGenerata:[],
        },
        mounted() {
            for(let i = 0; i<10 ; i ++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emailGenerata.push(response.data.response);
                })
            }
            console.log(this.emailGenerata)

        }

    }



);