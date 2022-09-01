const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue - Gen Emails',
        emailRandom: new Array (),
    },
    methods: {
        genEmail(emails){
            for(let i = 0; i < emails; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                            this.emailRandom.push(res.data.response)
                            console.log(this.emailRandom)
                    })
            }
        }
    },
    mounted() {
        this.genEmail(10)
    }    
})