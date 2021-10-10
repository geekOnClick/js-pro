const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];

  const renderGoodsItem = (product, img ='https://via.placeholder.com/113x64') => {
    return `<div class="goods-item"><img src = ${img}><h3>${product.title}</h3><p>price: ${product.price}$</p><button class ='btn'>В корзину</button></div>`;
  };
  
  const renderGoodsList = (list) => {
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item)).join('');
  }
  
  renderGoodsList(goods);