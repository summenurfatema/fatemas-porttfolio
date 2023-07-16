const express = require('express');
const cors = require('cors');
const studentRoute = require('./routers/student.routes');
const app = express();
const port = process.env.PORT || 5000;


require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use(studentRoute)
// Rest of your code goes here...

app.get('/', async (req, res) => {

  res.send('Furnica');
});

// Use bookingRouter here if needed

app.listen(port, () => {
  console.log(`Furnica server running on ${port}`);
});
