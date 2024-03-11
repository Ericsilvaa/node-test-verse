class Database {
  protected connection: any;

  constructor({ connection }: { connection: any }) {
    // Initialize database connection
    this.connection = connection;
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async connect() {
    await this.sleep(100);

    return this
  }

  disconnect(): void {
    // Disconnect from the database
    // Implement your disconnection logic here
  }

  async find(query: any) {
    await this.sleep(100);

    return [{ first_name: 'eric', last_name: 'oliveira', id: 'irfjkbijbnkjrbnf' }];
  }

  async create(query: any) {
    await this.sleep(100);

    return {};
  }
}

export default Database;