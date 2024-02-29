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
  }
    
]



const run = async () => {
  await prisma.user.createMany({
    data : userData
  })

}

run()