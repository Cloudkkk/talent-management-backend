const express = require('express');
const talentRoutes = require('./routes/talent');
const app = express();

app.use(express.json());
app.use('/talent', talentRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
