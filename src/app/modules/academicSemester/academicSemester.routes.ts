import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router
  .get('/', AcademicSemesterController.filter)
  .post('/create', AcademicSemesterController.create);

export const AcademicSemesterRoutes = router;
