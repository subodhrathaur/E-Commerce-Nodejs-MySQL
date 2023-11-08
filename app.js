// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
dotenv.config();
// const Product = require('./models/Product');
const app = express();
app.use(express.json());
app.use(cors());

// Set up your routes
app.use('/products', productRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
