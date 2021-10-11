  class GoodsItem {
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }
    render(product, img ='https://via.placeholder.com/113x64') {
      return `<div class="goods-item"><img src = ${img}><h3>${product.title}</h3><p>price: ${product.price}$</p><button class ='btn'>В корзину</button></div>`;
    }
  }

  class GoodsList {
    constructor() {
      this.fetchGoods();
      this.render();
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }

    calcItemsPrice () {
          let sum = this.goods.reduce((accum, item) =>{
              return accum += item.price;
          },0)
          console.log(`Сумма всех товаров составит: ${sum}$`);
        }

    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price);
        listHtml += goodItem.render(goodItem);
      });
      this.calcItemsPrice();
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
  }

  const list = new GoodsList();


  class Cart {

    constructor(){

    }

    placeAnOrder(){

    }

    deleteAllitems(){

    }


    acceptPromo(){

    }

    calculateTotal(){

    }

  }

  class ItemInCart {

    constructor(){

    }

    increaseAmmount(){

    }

    deleteItem(){
      
    }

    AddToFavourite(){

    }

    showDiscount(){

    }

  }