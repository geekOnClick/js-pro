const app = new Vue({
    el: "#app",
    data: {
        products: [],
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
        })
    },
    },
    mounted(){
        this.fetchGoods()
    }
})


