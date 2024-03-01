const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  {
    username : 'min',
    password : password,
    email: 'min@gmail.com',
    first_name : 'nitiphon',
    last_name : 'chaisue',
    address : '156/10',
    phone : 654743544
  },

  {
    username : 'hard',
    password : password,
    email: 'hard@gmail.com',
    first_name : 'nit',
    last_name : 'c',
    address : '156/10',
    phone : 896546315
  }
]

const todoData = [
  { title:'Learn HTML', dueDate: new Date(), userId: 1 },
  { title:'Learn CSS', dueDate: new Date(), userId: 1 },
  { title:'Learn JS', dueDate: new Date(), userId: 2 },
  { title:'Learn React', dueDate: new Date(), userId: 2 }, // แก้ไข userId เป็น 2
]


const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
  await prisma.todo.createMany({
    data : todoData
  })
}

run()