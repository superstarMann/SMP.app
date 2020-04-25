export const typeDefs = ["type User {\n  id: Int!\n  password: String\n  firstName: String!\n  lastName: String!\n  FullName: String\n  PhoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  Email: String\n  verifiedEmail: Boolean!\n  age: Int\n  ProfilePhoto: String!\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastOrientation: Float\n  createAt: String!\n  updateAt: String!\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payLoad: String!\n  key: String!\n  used: Boolean!\n  createAt: String!\n  updateAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  password: string | null;
  firstName: string;
  lastName: string;
  FullName: string | null;
  PhoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  Email: string | null;
  verifiedEmail: boolean;
  age: number | null;
  ProfilePhoto: string;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number | null;
  lastLat: number | null;
  lastOrientation: number | null;
  createAt: string;
  updateAt: string;
}

export interface Verification {
  id: number;
  target: string;
  payLoad: string;
  key: string;
  used: boolean;
  createAt: string;
  updateAt: string;
}
