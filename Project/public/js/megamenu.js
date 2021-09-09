Vue.component('megamenu', {
    props: ['left'],
    data() {
        return {
            menu1: ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories'],
            menu2: ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats'],
            menu3: ['Dresses', 'Tops', 'Sweaters/Knits'],
            menu4: ['Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats']
        }
    },
    template: `
    <nav class="header__megamenu" :class="{header__megamenu__left: left}">
        <megamenu-block class="header__megamenu__block" :menu="menu1"></megamenu-block>
        <div class="header__megamenu__block">
            <megamenu-block class="header__megamenu__block__half" :menu="menu2"></megamenu-block>
            <megamenu-block class="header__megamenu__block__half" :menu="menu3"></megamenu-block>
        </div>
        <div class="header__megamenu__block">
            <megamenu-block class="header__megamenu__block__half header__megamenu__block__half__before-photo" :menu="menu4">
            </megamenu-block>
            <a href="product.html">
                <div class="header__megamenu__block__with-photo">
                    <p class="header__megamenu__block__with-photo__text">Super<br>sale!</p>
                </div>
            </a>
        </div>
    </nav>`,
});

Vue.component('megamenu-block', {
    props: ['blockClass', 'menu'],
    template: `
    <div :class="blockClass">
        <h3 class="header__megamenu__block__heading">WOMEN</h3>
        <ul class="header__megamenu__block__menu">
            <li v-for="item in menu"><a href="product.html" class="header__megamenu__block__menu__item">{{ item }}</a></li>
        </ul>
    </div>`,    
});

