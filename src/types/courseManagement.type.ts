import { TAdmissionSemester } from '.';

export interface TSemester {
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
