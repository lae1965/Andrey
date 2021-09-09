const app = new Vue({
    el: '#app',
    data: {
        browseMenu1: [
            'Dresses', 'Tops', 'Sweaters/Knits', 'Jackets/Coats', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories'
        ],
        browseMenu2: [
            'Tees/Tank', 'Shirts/Polos', 'Sweaters', 'Sweatshirts/Hoodies', 'Blazers', 'Jackets/vests'
        ],
        megaMenu: [
            'HOME', 'MEN', 'WOMEN', 'KIDS', 'ACCOSERIESE', 'FEATURED', 'HOT DEALS'
        ],
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log('error');
                });

        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    console.log('error');
                });
        },
        putJson(url, data) {
            return fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(result => result.json())
                .catch(error => {
                    console.log('error');
                });
        },
        deleteJson(url) {
            return fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                }).then(result => result.json())
                .catch(error => {
                    console.log('error');
                });
        },
    },
});