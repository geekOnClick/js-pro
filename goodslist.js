Vue.component('goodslist', {

    template: ` <div id="goods-list" >
                <div :id = 'item.id_product' class="goods-item" v-for="item of $parent.products" >
                <img :src = $parent.img>
                <h3>{{ item.product_name }}</h3>
                <p>цена: {{ item.price }} $</p>
                <button class ='btn' @click='$parent.add'>В корзину</button>
                </div>
                </div>
              `

})
