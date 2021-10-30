Vue.component('cart', {
    template: `<div class="cart__items">
                <div :id = 'item.id_product' class="cart__item" v-for="item of $parent.cartItems">
                <img :src = $parent.img>
                <h3>{{ item.product_name }}</h3>
                <h3>{{ item.quantity }}</h3>
                <p>цена: {{ item.price }} $</p>
                <p>Итого: {{ item.total }} $</p>
                <p class='cross' @click='$parent.remove'>&#10006</p>
                </div>
                </div>`
})