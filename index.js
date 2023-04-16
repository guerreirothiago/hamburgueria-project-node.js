const express = require('express')
const uuid = require('uuid')
const port = 3000
const app = express()
app.use(express.json())


const orders = []

const checkUserId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(order => order.id === id)

    if(index < 0) {
        return response.status(404).json({ error: "User not found" })
    }

    request.orderIndex = index
    request.userId = id

    next()
}


app.get('/orders', (request, response) => {
    return response.json(orders)
})

app.post('/orders', (request, response) => {
    const { order, clientName, price, status } = request.body
    const orderPlaced = { id: uuid.v4(), order, clientName, price, status: "Em preparação" }

    orders.push(orderPlaced)

    return response.status(201).json(orderPlaced)
})

app.put('/orders/:id', checkUserId, (request, response) => {
    const { order, clientName, price, status } = request.body
    const index = request.userIndex
    const id = request.userId

    const updateOrder = { id, order, clientName, price, status: "Em preparação" }
    
    orders[index] = updateOrder

    return response.json(updateOrder)
})

app.delete('/orders/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    orders.splice(index,1)

    return response.status(204).json(orders)
})

app.patch('/orders/:id', checkUserId, (request, response) => {
    const { id } = request.params
    const { order, clientName, price, status } = request.body

    const updateOrder = { id, order, clientName, price, status: "Pronto" }

    const index = orders.findIndex(order => order.id === id)

    if(index < 0) {
        return response.status(404).json({ error: "User not found" })
    }

    orders.push(updateOrder)

    orders[index] = updateOrder

    return response.json(updateOrder)
})





app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})