const app = new Vue({
    el: "#app",
    data: {
        products: [],
        cartItems: [],
        cart: false,
        img: 'https://via.placeholder.com/113x64',
        urlCatalog: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
    },
    methods: {
    filter(event){
        event.preventDefault();
        if(event.target.value.length == 0) this.fetchGoods();
        let value = event.target.value;
        let reg = new RegExp(`\^${value}`, 'i');
        let arr = this.products.filter(elem => reg.test(elem.product_name));
        if(arr.length !=0 ) {
            this.products = arr
        }
        else {
            this.fetchGoods();
        }
        
    },
    fetchGoods() {
        return fetch(this.urlCatalog)
        .then(data => data.json())
        .then(data => {
            this.products = data;
            this.addQuantity(this.products)
        })
    },
    addQuantity(products){
        let arr = products.map(item => {
            let obj = Object.assign({quantity: 0, total: item.price}, item)
            return obj;
        });
        this.products = arr;
        
        
    },
    add(event) {
       let good = this.products.find(item => item.id_product == event.currentTarget.parentElement.id)
       if(good.quantity == 0) {
           good.quantity ++;
           this.cartItems.push(good)
       }
       else {
           good.quantity ++;
           good.total = good.quantity * good.price;
       }
    },
    remove(event) {
       let good = this.cartItems.find(item => item.id_product == event.currentTarget.parentElement.id)
        if(good.quantity > 1) {
            good.quantity--;
            good.total = good.quantity * good.price;
        }
        else {
            good.quantity = 0;
            let value = this.cartItems.indexOf(good)
            this.cartItems.splice(value,1)
        }
    }
    },
    mounted(){
        this.fetchGoods()
    }
    
})


