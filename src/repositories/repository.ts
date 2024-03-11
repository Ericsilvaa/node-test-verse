import Database from "../config/dbConnection";

export default class UserRepository {
  dbConnection: Database;

  constructor({ dbConnection }: { dbConnection: Database }) {
    this.dbConnection = dbConnection;
  }

  async find(query: any) {
    return this.dbConnection.find(query);
  }

  async create(data: any) {
    return this.dbConnection.create(data);
  }
}

