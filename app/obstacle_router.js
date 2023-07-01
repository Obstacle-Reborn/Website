import express from 'express'
import path from 'path'
const router = express.Router()

router.route('*')
  .get(function (req, res, next) {
    res.sendFile(path.resolve('./build/index.html'))
    res.status(404)
  })


export default router