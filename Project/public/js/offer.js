Vue.component('Offer', {
    props: ['index'],
    data() {
        return {
            offerObj: [
                {
                    action: 'HOT DEAL',
                    accessory: 'FOR MEN'
                }, {
                    action: 'LUXIROUS & TRENDY',
                    accessory: 'ACCESSORIES'
                }, {
                    action: '30% OFFER',
                    accessory: 'WOMEN'
                }, {
                    action: 'NEW ARRIVALS',
                    accessory: 'FOR KIDS'
                }
            ]
        }
    },
    template: `
    <a href="product.html">
        <div :style="addStyle">
            <div class="offers__group__block" :class="makeClass">
                <div class="offers__group__block__content">
                    <h4 class="offers__group__block__heading">{{ offerObj[+index - 1].action }}</h4>
                    <p class="offers__group__block__text">{{ offerObj[+index - 1].accessory }}</p>
                </div>
            </div>
        </div>
    </a>`,
    computed: {
        makeClass() {
            return `offers__group__block__${this.index}`;
        },
        addStyle() {
            if (+this.index == 2) return 'height: 261px; width: 560px; background: #dadad2';
        }
    }
});