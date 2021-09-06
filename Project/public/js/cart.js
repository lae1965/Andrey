Vue.component('cart-list', {
    data() {
        return {
            carts: [],
        }
    },
    template: `
        <nav v-if="carts.length" class="header__cart-nav">
            <a v-for="item in carts" href="single-page.html">
                <div class="header__cart-nav__block">
                    <img :src="item.img" :alt="item.img"
                                class="header__cart-nav__block__image">
                    <div class="header__cart-nav__block__content">
                        <p class="header__cart-nav__block__content__name">{{ item.productName }}</p>
                        <div class="header__cart-nav__block__content__stars">
                            <i v-for="n in 5" class="fas fa-star"></i>
                        </div>
                        <p class="header__cart-nav__block__content__price">{{ item.quantity }}&nbsp;<span
                                class="header__cart-nav__block__content__price__X">&nbsp;&nbsp;X&nbsp;</span>&nbsp;&nbsp;\${{ item.price }}
                        </p>
                        <div>
                            <span @click.prevent="addQuantity(item, 1)" class="header__cart-nav__block__content__change">+</span>
                            <span @click.prevent="addQuantity(item, -1)" class="header__cart-nav__block__content__change">-</span>
                        </div>
                    </div>
                    <i @click.prevent="delFromCart(item)" class="fas fa-times-circle header__cart-nav__block__delete"></i>
                </div>
            </a>
            <div class="header__cart-nav__total-price">
                <p>TOTAL</p>
                <p>\${{ getTotalPrice }}</p>
            </div>
            <a href="checkout.html" class="header__cart-nav__button header__cart-nav__button__check">
                    Checkout</a>
            <a href="cart.html" class="header__cart-nav__button header__cart-nav__button__cart">
                    Go to cart</a>
        </nav>
        <div v-else class="header__cart-nav message">CART IS EMPTY!!!</div>`,
    methods: {
        addToCart(product) {
            const find = this.carts.find(el => el.id === product.id);
            if (find) {
                this.addQuantity(find, 1);
            } else {
                const newProduct = Object.assign({ quantity: 1 }, product);
                this.$parent.postJson(`/api/cart`, newProduct)
                    .then(data => {
                        if (data.result === 1) this.carts.push(newProduct);
                    });
            }
        },
        addQuantity(product, count) {
            if (product.quantity + count <= 0) this.delFromCart(product);
            else {
                this.$parent.putJson(`/api/cart/${product.id}`, { quantity: count })
                    .then(data => {
                        if(data.result === 1) product.quantity += count;
                    });
            }                
        },
        delFromCart(product) {
            this.$parent.deleteJson(`/api/cart/${product.id}`)
                .then(data => {
                    if (data.result === 1) this.carts.splice(this.carts.indexOf(product), 1);
                });
        },
    },
    computed: {
        getTotalPrice() {
            let price = 0;
            this.carts.forEach(element => {
                price += element.quantity * element.price;
            });
            return price;
        },
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                this.carts = data;
            });
    },
});

