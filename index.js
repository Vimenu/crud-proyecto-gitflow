const express = require('express');
const app = express();
app.use(express.json());

let items = []; 


app.get('/items', (req, res) => {
  res.json(items);
});


app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json({ message: 'Item agregado' });
});


app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items[id] = req.body;
  res.json({ message: 'Item actualizado' });
});


app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items.splice(id, 1);
  res.json({ message: 'Item eliminado' });
});


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

#comentarioejemplo
