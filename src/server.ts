import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import usersRoutes from './routes/usersRoutes';
import rolesRoutes from './routes/rolesRoutes';
import festivalsRoutes from './routes/festivalsRoutes';
import vehiclesRoutes from './routes/vehiclesRoutes';
import routesRoutes from './routes/routesRoutes';
// Import other routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/users', usersRoutes);
app.use('/roles', rolesRoutes);
app.use('/festivals', festivalsRoutes);
app.use('/vehicles', vehiclesRoutes);
app.use('/routes', routesRoutes);
// Setup other routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
