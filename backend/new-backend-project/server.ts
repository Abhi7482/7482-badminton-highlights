import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)

// Mock data for the highlights
const mockData = [
  {
    sessionId: 1,
    matchId: 1,
    sport: 'badminton',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    teams: {
      Sudeep: { score: 21, statistics: { caloriesBurned: 100, shotAccuracy: 90 } },
      Saket: { score: 19, statistics: { caloriesBurned: 80, shotAccuracy: 85 } }
    },
    keyMoments: [
      { time: 30, description: 'Sudeep scores a great point' },
      { time: 60, description: 'Saket makes an amazing comeback' }
    ],
    // Updated thumbnail URL
    thumbnailUrl: 'https://i.postimg.cc/sggrQyhY/pexels-vladvictoria-10544231.jpg'
  }
];

// API route to get the highlights data
app.get('/api/highlights', (req, res) => {  // Changed the endpoint to /api/highlights
  res.json(mockData);  // Respond with the mock data
});

// Ensure that the server is running on a specific port
const PORT = process.env.PORT || 4000; // Use environment variable or default to 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
