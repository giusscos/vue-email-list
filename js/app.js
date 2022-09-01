const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue - Gen Emails',
        emailsNum: '',
        emailRandom: new Array (),
    },
    methods: {
        genEmail(emails){
            for(let i = 0; i < emails; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                            this.emailRandom.push(res.data.response)
                            // console.log(this.emailRandom)
                    })
            }
            this.emailsNum = ''
        }
    },
})