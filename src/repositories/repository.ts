import Database from "../config/dbConnection";
import { TUser } from "../interfaces/IUser";

export default class UserRepository {
  userDb: Collection<any>;

  constructor({ db }: { db: Loki }) {
    this.userDb = db.addCollection('user')
  }

  async find() {
    return this.userDb.find().map(({ meta, $loki, ...result }) => result);
  }

  async create(data: TUser) {
    const { $loki, meta, ...result } = this.userDb.insertOne(data);


    return result

  }
}

