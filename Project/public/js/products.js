Vue.component('product-list', {
    data() {
        return {
            products: [],
            filter: [],
        }
    },
    methods: {
        filtred(findStr) {
            const regExp = new RegExp(findStr, 'i');
            this.filter = this.products.filter(el => regExp.test(el.productName));
        }
    },
    template: `
    <div v-if="products.length">
        <div class="fetured__article">
            <div v-for="item in filter" class="fetured__article__card" :key="item.id">
                <a href="single-page.html" :data-id="item.id">
                    <img :src="item.img" :alt="item.img" class="fetured__article__card__image">
                    <div class="fetured__article__card__fon"></div>
                    <div>
                        <p class="fetured__article__card__text">{{ item.productName }}</p>
                        <p class="fetured__article__card__price">\${{ item.price }}</p>
                    </div>
                </a>
                <div @click="$root.$refs.cart.addToCart(item)" class="fetured__article__card__cart">
                    <img src="img/Cart-White.svg" alt="Cart" class="fetured__article__card__cart__image">
                    <p class="fetured__article__card__cart__text">Add to Cart</p>
                </div>
            </div>
        </div>
        <a href="product.html">
            <div class="fetured__browse">
                <p class="fetured__browse__text">Browse All Product</p>
                <i class="fas fa-long-arrow-alt-right"></i>
            </div>
        </a>
    </div>
    <p v-else class="no-products">Sorry, the goods warehouse is empty!!!</p>`,
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (const el of data) {
                    this.products.push(el);
                    this.filter.push(el);
                }
            });
    }
});
