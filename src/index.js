const express = require('express');
const {
  postUser,
  getUser,
  updateUser,
  deleteUser,
} = require('./controllers/user.controller');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/user', postUser);
app.get('/user', getUser);
app.put('/user', updateUser);
app.delete('/user', deleteUser);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
