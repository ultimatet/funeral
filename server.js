require('dotenv').config();  // Load environment variables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models'); // Import sequelize instance

app.use(cors());
app.use(bodyParser.json());  // Parse JSON requests

// Import routes
const userRoutes = require('./routes/user');

// Define routes
app.use('/signup', userRoutes);

// Sync sequelize models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
