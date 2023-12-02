"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    return res.send('Hello Products');
});
app.get('/products', (req, res) => {
    const products = [
        {
            name: 'grape',
            Description: 'Taste Greate',
            Category: {
                name: 'produce'
            },
            Price: 4.99
        },
        {
            name: 'orange',
            Description: 'Very Nice',
            Category: {
                name: 'produce'
            },
            Price: 6.99
        }
    ];
    return res.json(products);
});
app.listen(port, () => console.log(`Listening on Port ${port}`));
