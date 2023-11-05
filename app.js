const express = require('express');
const cors = require('cors');
const talentRoutes = require('./routes/talent');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/talent', talentRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
