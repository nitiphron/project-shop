const db = require('../models/db')
const { Status } = require('@prisma/client')

exports.getByUser = async (req, res, next) => {
  try {
    const products = await db.product.findMany({
      where: {
        users: { some: { id: 1 } }, // Replace 1 with the actual user ID you want to fetch products for
      },
    });
    
    res.json({ products })
  } catch (err) {
    next(err)
  }
}

exports.createProduct = async (req, res, next) => {
  // validate req.body
  const data = req.body
  try {
    const rs = await db.product.create({
      data: { ...data, userId: req.user.id }
    })
    res.json({ msg: 'Create OK', result: rs })
  } catch (err) {
    next(err)
  }
}

exports.updateProduct = async (req, res, next) => {
  // validate req.params + req.body
  const { id } = req.params
  const data = req.body
  try {
    const rs = await db.product.update({
      data: { ...data },
      where: { id: +id, userId: req.user.id }
    })
    res.json({ msg: 'Update ok', result: rs })
  } catch (err) {
    next(err)
  }
}

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params
  try {
    const rs = await db.product.delete({ where: { id: +id, userId: req.user.id } })
    res.json({ msg: 'Delete ok', result: rs })
  } catch (err) {
    next(err)
  }
}

exports.getAllStatus = async (req, res, next) => {
  res.json({ status: Object.values(Status) })
}
