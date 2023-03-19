import { User } from 'firebase/auth';

export interface Story {
  id: string;
  name: string;
  address: string;
  history: string;
  image: File | string;
  relatives: string[];
  userId: string | null;
  user: string;
}
