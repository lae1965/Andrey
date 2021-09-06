Vue.component('filters', {
    data() {
        return {
            findStr: '',
        }
    },
    template: `
    <form class="header__top__left__seach">
        <input v-model="findStr" type="text" placeholder="Search for Item..." class="header__top__left__seach__text">
        <button @click.prevent="$root.$refs.products.filtred(findStr)" type="submit" class="header__top__left__seach__submit"><i class="fas fa-search"></i></button>
    </form>`,
});