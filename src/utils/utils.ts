import { v4 as uuidv4 } from 'uuid';

export function generateHash() {
  return uuidv4();
}
