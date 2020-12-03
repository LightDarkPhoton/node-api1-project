// Helpful Lambda School Instructor Video: https://www.youtube.com/watch?v=4xcsDjPfC7Y&feature=youtu.be

// import express from 'express'; // ES6 Modules
// So instead of using import like above, we use this protocol instead:
const express = require('express') // CommonJS module, equivalent to the import above

const server = express()

server.use(express.json())

let users = [
    {
        id: 0,
        name: 'John Smith',
        bio: "The first man"
    }
]

server.get('/', (req, res) => {
    res.send('<h1>Hello Web 31 </h1>')
    res.json({api: 'API is running...'})
})

server.get('/api/users', (req, res) => {
    if (users) {
        res.json(users);
    } else {
        res.status(500).json({ errorMessage: "The users information could not be retrieved." })
    }
})






const PORT = 8000
server.listen( PORT, () => console.log(`Server running on port ${PORT}`))

