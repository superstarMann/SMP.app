export const typeDefs = ["type Chat {\n  id: Int!\n  messages: [Message]!\n  participants: [User]!\n  createAt: String!\n  updateAt: String\n}\n\ntype Message {\n  int: Int!\n  text: String!\n  chat: Chat!\n  user: User!\n  createAt: String!\n  updateAt: String\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  adress: String!\n  isFav: Boolean!\n  createAt: String!\n  updateAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAdress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOffAdress: String!\n  dropOffLat: Float!\n  dropOffLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  createAt: String!\n  updateAt: String\n}\n\ntype User {\n  id: Int!\n  password: String\n  firstName: String!\n  lastName: String!\n  FullName: String\n  PhoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  Email: String\n  verifiedEmail: Boolean!\n  age: Int\n  ProfilePhoto: String!\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastOrientation: Float\n  createAt: String!\n  updateAt: String!\n  chat: Chat\n  messages: [Message]\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payLoad: String!\n  key: String!\n  used: Boolean!\n  createAt: String!\n  updateAt: String!\n}\n"];
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
  chat: Chat | null;
  messages: Array<Message> | null;
}

export interface Chat {
  id: number;
  messages: Array<Message>;
  participants: Array<User>;
  createAt: string;
  updateAt: string | null;
}

export interface Message {
  int: number;
  text: string;
  chat: Chat;
  user: User;
  createAt: string;
  updateAt: string | null;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  adress: string;
  isFav: boolean;
  createAt: string;
  updateAt: string | null;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAdress: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOffAdress: string;
  dropOffLat: number;
  dropOffLng: number;
  price: number;
  distance: string;
  duration: string;
  createAt: string;
  updateAt: string | null;
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
