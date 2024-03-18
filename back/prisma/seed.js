const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const password = bcrypt.hashSync('123456');
const userData = [
  {
    username: 'min',
    password: password,
    email: 'min@gmail.com',
    first_name: 'nitiphon',
    last_name: 'chaisue',
    address: '156/10',
    phone: 654743544,
  },
  {
    username: 'hard',
    password: password,
    email: 'hard@gmail.com',
    first_name: 'nit',
    last_name: 'c',
    address: '156/10',
    phone: 896546315,
  },
];

const productData = [
  { product_name: 'Product 1', description: 'Description 1', price: 10, stockquantity: 100, cartId: 1 },
  { product_name: 'Product 2', description: 'Description 2', price: 20, stockquantity: 200, cartId: 2 },
  // { product_name: 'Product 3', description: 'Description 3', price: 30, stockquantity: 300, cartId: 3 },
];

const run = async () => {
  try {
    await prisma.$transaction([
      prisma.user.createMany({
        data: userData,
      }),
      prisma.product.createMany({
        data: productData,
      }),
    ]);
    console.log('Transaction completed successfully.');
  } catch (error) {
    console.error('Transaction failed:', error);
  } finally {
    await prisma.$disconnect();
  }
};

run();



run();
