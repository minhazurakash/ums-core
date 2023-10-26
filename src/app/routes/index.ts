import express from 'express';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/',
    routes: router.get('/', (req, res) => res.json('hi')),
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
