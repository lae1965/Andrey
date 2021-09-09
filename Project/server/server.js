const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use('/', express.static('./public'));

// Получение общего списка товара
app.get('/api/products', (req, res) => {
    fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({
                result: 0,
                text: err
            }));
        } else {
            res.send(data);
        }
    });
});

const cartBase = './server/db/userCart.json'; 
// Получение списка товара, помещенного в корзину
app.get('/api/cart', (req, res) => {
    fs.readFile(cartBase, 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({
                result: 0,
                text: err
            }));
        } else {
            res.send(data);
        }
    });
});

// Добавление нового товара в корзину
/*app.post('/api/cart', (req, res) => {
    fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            const cart = JSON.parse(data);
            cart.push(req.body);
            fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            });
        }
    });
});*/

  
app.post('/api/cart', (req, res) => {
    fs.readFile(cartBase, 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({
                result: 0,
                text: err
            }));
        } else {
            const cart = JSON.parse(data);
            cart.push(req.body);
            fs.writeFile(cartBase, JSON.stringify(cart), (err) => {
                if (err) {
                    res.send(JSON.stringify({
                        result: 0
                    }));
                } else {
                    res.send(JSON.stringify({
                        result: 1
                    }));
                }
            });
        }
    });
});

// Изменение количества данного наименования товара в корзине
app.put('/api/cart/:id', (req, res) => {
    fs.readFile(cartBase, 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({
                result: 0,
                text: err
            }));
        } else {
            const cart = JSON.parse(data);
            const find = cart.find(el => el.id === +req.params.id);
            find.quantity += req.body.quantity;
            fs.writeFile(cartBase, JSON.stringify(cart), (err => {
                if (err) {
                    res.send(JSON.stringify({
                        result: 0
                    }));
                } else {
                    res.send(JSON.stringify({
                        result: 1
                    }));
                }
            }));
        }
    });
});

// Удаление товара из корзины
app.delete('/api/cart/:id', (req, res) => {
    fs.readFile(cartBase, (err, data) => {
        if (err) {
            res.send(JSON.stringify({
                result: 0,
                text: err
            }));
        } else {
            const cart = JSON.parse(data);
            const find = cart.find(el => el.id === req.params.id);
            cart.splice(cart.indexOf(find), 1);
            fs.writeFile(cartBase, JSON.stringify(cart), (err) => {
                if (err) {
                    res.send(JSON.stringify({
                        result: 0
                    }));
                } else {
                    res.send(JSON.stringify({
                        result: 1
                    }));
                }
            });
        }
    });
});

// Работа с сервером
const port = process.env.PORT || 5555;
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});