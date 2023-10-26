import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.create(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester create successful',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const filter = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.filter();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester fetch successful',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  create,
  filter,
};
