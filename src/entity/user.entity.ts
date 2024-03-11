import cryto from 'node:crypto';
import { TUser } from '../interfaces/IUser';



export default class User {
  first_name: string;
  last_name: string;
  id: number | string;

  constructor({ first_name, last_name, id }: TUser) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.id = id !== undefined && id !== null ? id : crypto.randomUUID();
  }

  // create({ first_name, last_name, id }: TUser) {
  //   return new User({ first_name, last_name, id });
  // }

  isValid() {
    return !!this.first_name && !!this.last_name;
  }

}