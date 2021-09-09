Vue.component('Network', {
    data() {
        return {
            networkClasses: [
                'fa-facebook-f',
                'fa-twitter',
                'fa-instagram',
                'fa-pinterest-p',
                'fa-google-plus-g'
            ]
        }
    },
    template: `
    <nav class="footer__bottom__networks">
        <a v-for="item in networkClasses" href="#">
            <div class="footer__bottom__networks__item">
                <i class="fab" :class="item"></i>
            </div>
        </a>
    </nav>

    `
});  