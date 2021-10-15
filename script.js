  class GoodsItem {
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }
    render(product, img ='https://via.placeholder.com/113x64') {
      return `<div class="goods-item"><img src = ${img}><h3>${product.title}</h3><p>цена: ${product.price}$</p><button class ='btn'>В корзину</button></div>`;
    }
  }

  class GoodsList {
    constructor() {
      this.goods = [];
      this.fetchGoods()
      .then(data => {
        this.goods = data;
        this.render(this.goods);
      })
    }

    fetchGoods() {
      const urlCatalog = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
      return fetch(urlCatalog)
      .then(data => data.json())
    }

    render(goods) {
      let listHtml = '';
      goods.forEach(good => {
        const goodItem = new GoodsItem(good.product_name, good.price);
        listHtml += goodItem.render(goodItem);
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
  }

  const list = new GoodsList();


  class Cart {

    constructor(){
      this.cart = document.querySelector('.cart__items');
      this.clickButton();
      this.jsonObj = {}; // Сохраняем весь объект из json
      this.goodsinCart = []; // Сохраняем только массив объектов для отрисовки
      this.fetchGoods()
      .then (data => {
        this.jsonObj = data;
      })
      .then(() => {
        this.jsonObj.contents.forEach(element => {
        this.goodsinCart.push(element)
      });
        this.render(this.goodsinCart);
      })
    }

    fetchGoods() {
      const urlCatalog = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';
      return fetch(urlCatalog)
      .then(data => data.json())
    }
   
    clickButton(){
      document.querySelector('.cart-button').addEventListener('click', () => {
        this.cart.classList.toggle('hide')
      })
    }

    render(goodsinCart) {
      let cartListHtml = '';
      goodsinCart.forEach(good => {
        const cartItem = new ItemInCart(good.product_name, good.price, good.quantity);
        cartListHtml += cartItem.render(cartItem);
      });
      document.querySelector('.cart__items').innerHTML = cartListHtml;
    }

  }

  class ItemInCart {

    constructor(title, price,quantity) {
      this.title = title;
      this.price = price;
      this.quantity = quantity;
    }
    render(product, img ='https://via.placeholder.com/64x64') {
      return `<div class="cart__item"><img src = ${img}><h3>${product.title}</h3><p>Цена: ${product.price}$</p><p>Количество: ${product.quantity}</p><button class ='btn-del'>x</button></div>`;
    }
  }

  let cart = new Cart();