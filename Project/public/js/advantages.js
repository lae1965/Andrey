Vue.component('Advantages', {
    data() {
        return {
            articleObj: [
                {
                    src: 'img/Car-Icon.png',
                    alt: 'Car',
                    heading: 'Free Delivery',
                    text: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.'
                }, {
                    src: 'img/Discount-Icon.png',
                    alt: 'Discount',
                    heading: 'Sales & discounts',
                    text: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.'
                }, {
                    src: 'img/Crown-Icon.png',
                    alt: 'Crown',
                    heading: 'Quality assurance',
                    text: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.'
                }
            ]
        }
    },
    template: `
    <div class="advantages__content">
        <article v-for="item in articleObj" class="advantages__content__block">
            <img :src="item.src" :alt="item.alt" class="advantages__content__block__icon">
            <div class="advantages__content__block__description">
                <h3 class="advantages__content__block__heading">{{ item.heading }}</h3>
                <p class="advantages__content__block__text">{{ item.text }}.</p>
            </div>
        </article>
    </div>`
});