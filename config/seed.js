require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Hot Tea', sortOrder: 10},
    {name: 'Espresso Signature', sortOrder: 20},
    {name: 'Sandwiches', sortOrder: 30},
    {name: 'Pastry', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Black with lemon', image: 'https://i.imgur.com/gL2zYB7.png', category: categories[0], price: 5.95},
    {name: 'Aromatic Mint', image: 'https://i.imgur.com/MAUqeaY.png', category: categories[0], price: 6.95},
    {name: 'Hibiscus', image: 'https://i.imgur.com/MsyT5jJ.png', category: categories[0], price: 3.95},
    {name: 'Jasmine Green', image: 'https://i.imgur.com/f47Q3ry.png', category: categories[0], price: 14.95},
    {name: 'Capuccino', image: 'https://i.imgur.com/VFRV5SD.png', category: categories[1], price: 13.95},
    {name: 'Latte Mocca', image: 'https://i.imgur.com/YzVZc6o.png', category: categories[1], price: 25.95},
    {name: 'Espresso', image: 'https://i.imgur.com/68igunc.png', category: categories[1], price: 1.95},
    {name: 'Latte', image: 'https://i.imgur.com/eQMofca.png', category: categories[1], price: 4.95},
    {name: 'Roast beef', image: 'https://i.imgur.com/uH0itl0.png', category: categories[2], price: 3.95},
    {name: 'Salmon with Feta cheese', image: 'https://i.imgur.com/2gyRCJH.png', category: categories[2], price: 7.95},
    {name: 'Chiclen, lettuce, tomatoes', image: 'https://i.imgur.com/rI6uLeb.png', category: categories[2], price: 1.95},
    {name: 'Ham & Cheese', image: 'https://i.imgur.com/XhkPSZu.png', category: categories[2], price: 2.95},
    {name: 'Butter Croissant', image: 'https://i.imgur.com/CWDWTyJ.png', category: categories[3], price: 3.95},
    {name: 'Chocolate Croissant', image: 'https://i.imgur.com/vrOPqDd.png', category: categories[3], price: 1.95},
    {name: 'Almond Croissant', image: 'https://i.imgur.com/QAG1hMa.png', category: categories[3], price: 0.95},
    {name: 'Strawberry Cream', image: 'https://i.imgur.com/LzlesgT.png', category: categories[3], price: 2.95}
    
  ]);

  console.log(items)

  process.exit();

})();