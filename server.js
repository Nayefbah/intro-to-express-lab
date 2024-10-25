const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]

const shoes = [
  { name: 'Birkenstocks', price: 50, type: 'sandal' },
  { name: 'Air Jordans', price: 500, type: 'sneaker' },
  { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
  { name: 'Utility Boots', price: 20, type: 'boot' },
  { name: 'Velcro Sandals', price: 15, type: 'sandal' },
  { name: 'Jet Boots', price: 1000, type: 'boot' },
  { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
]

const express = require('express')

const app = express()
app.get('/greetings/:name', (req, res) => {
  res.send(`<h1> Greetings ${req.params.name}</h1>`)
})
app.get('/roll/:number', (req, res) => {
  const item = Number(req.params.number)
  const validator = require('validator')
  if (validator.isNumeric(item)) {
    const roll = Math.floor(math.random() * (item + 1))
    res.send(`you rolled a ${roll}`)
  } else {
    res.send('you must specify a number')
  }
})
app.listen(3000, () => {
  console.log('listening on port 3000')
})

app.get('/collectibles/:index', (req, res) => {
  app.get(`/collectibles/:index`, (req, res) => {
    const index = number(req.params.index)
    if (index >= 0 && index < collectibles.lenght) {
      const item = collectibles[index]
      res.send(`you want the ${item.name}? For ${item.price}`)
    } else {
      res.send('this item is not yet in stock')
    }
  })
})

app.get('/shoes', (req, res) => {
  let filteredShoes = shoes

  if (req.query['min-price']) {
    const minPrice = Number(req.query['min-price'])
    filteredShoes = filteredShoes.filter((shoe) => shoe.price >= minPrice)
  }

  if (req.query['max-price']) {
    const maxPrice = Number(req.query['max-price'])
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= maxPrice)
  }

  if (req.query.type) {
    const type = req.query.type
    filteredShoes = filteredShoes.filter((shoe) => shoe.type === type)
  }

  res.json(filteredShoes)
})
