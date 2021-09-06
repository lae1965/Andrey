Vue.component('browse', {
    props: ['title', 'menu'],
    template: `
    <div class="header__browse-nav__block">
        <p class="header__browse-nav__block__heading">{{ title }}</p>
        <ul class="header__browse-nav__block__menu">
            <li v-for="item in menu"><a href="product.html" class="header__browse-nav__block__menu__item">{{ item }}</a></li>
        </ul>    
    </div>`,    
});