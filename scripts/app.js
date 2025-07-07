const app = Vue.createApp({
    data(){
        return{
            title: 'Week 10 Lab',
            firstName:'',
            lastName:'',
            quantity:0,
            pricePerItem: 10
        }
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        totalPrice() {
            return this.quantity * this.pricePerItem;
        }
    },
    methods: {
        clearFields() {
            this.firstName= '';
            this.lastName = '';
            this.quantity = 0
        }
    }
} 
);
app.mount('#app');