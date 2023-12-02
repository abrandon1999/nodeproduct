import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello Products');
});

app.get('/products', (req: Request, res: Response) => {
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
