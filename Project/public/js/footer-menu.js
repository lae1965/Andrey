Vue.component('Footermenu', {
    data() {
        return {
            heading: ['COMPANY', 'INFORMATION', 'SHOP CATEGORY'],
            menuList: [
                ['Home', 'Shop', 'About', 'How It Work', 'Contact'],
                ['Tearms', 'Privacy Policy', 'How To Buy', 'How To Sell', 'Promoting'],
                ['Men', 'Women', 'Child', 'Apparel', 'Brows All']
            ]
        }
    },
    template:`
    <div class="footer__top__navigation">
        <nav v-for="(item, i) in heading" class="footer__top__block">
            <h3 class="footer__top__block__heading">{{ item }}</h3>
            <Menu-item :menu="menuList[i]"></Menu-item>
        </nav>
    </div>`
});

Vue.component('Menu-item', {
    props: ['menu'],
    template: `
    <ul class="footer__top__block__menu">
        <li v-for="item in menu" class="footer__top__block__menu__item"><a href="#">{{ item }}</a></li>
    </ul>`
});