import express from 'express'

import todoRoutes from './todo.routes.js'

const router = express.Router()

router.get('/', function(req, res) {
    res.send('Hello World')
})
router.use('/todo', todoRoutes)

export default router