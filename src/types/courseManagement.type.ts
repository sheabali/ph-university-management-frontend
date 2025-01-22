import { TAdmissionSemester } from '.';

export interface TAcademicSemester {
  _id: string;
  academicSemester: TAdmissionSemester;
  status: string;
  startDate: string;
  endDate: string;
  minCredit: number;
  maxCredit: number;
  createdAt: string;
  updatedAt: string;
}
