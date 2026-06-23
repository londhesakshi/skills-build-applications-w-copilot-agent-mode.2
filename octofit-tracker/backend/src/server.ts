import express from 'express';
import { connectDB } from './config/database';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import workoutsRouter from './routes/workouts';
import leaderboardRouter from './routes/leaderboard';

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/workouts', workoutsRouter);
app.use('/api/leaderboard', leaderboardRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 OctoFit Tracker API running on http://localhost:${PORT}`);
});

export default app;
