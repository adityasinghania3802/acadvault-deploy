export type User = {
  _id: string;
  email: string;
  name: string;
  yearOfPassing: string;
  Program: string;
};

export type Course = {
  _id: string;
  code: string;
  name: string;
  description: string;
  category: string;
}