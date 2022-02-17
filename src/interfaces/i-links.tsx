import { FieldValue } from "firebase/firestore";

export interface ILinks {
  url: string;
  name: string;
  description: string;
}

export interface ILinksData extends ILinks {
  id: string;
  timestamp: FieldValue
}