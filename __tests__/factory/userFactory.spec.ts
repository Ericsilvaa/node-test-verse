import Database from "../../src/config/dbConnection";
import UserFactory from "../../src/factory/user.factory";


class MockDatabase extends Database {
  protected connection: any;
  connect: jest.Mock;
  find: jest.Mock;
  create: jest.Mock;

  constructor() {
    super({ connection: '' });
    this.connect = jest.fn();
    this.find = jest.fn();
    this.create = jest.fn();
  }
}

const MOCK_USERS = [
  { first_name: "ERIC", last_name: "oliveira", id: "irfjkbijbnkjrbnf" },
];

describe("User Factory", () => {
  describe("find", () => {
    beforeAll(() => {
      // Mock the database connection
      jest.spyOn(Database.prototype, "connect").mockRejectedValue(this);
      jest.spyOn(Database.prototype, "find").mockRejectedValue(MOCK_USERS);
    });

    it("should return an array of users", async () => {
      const userFactory = await UserFactory.createInstance();

      const result = await userFactory.find({});
      console.log("🚀 ~ it ~ result:", result);

      // expect(result).toEqual(MOCK_USERS);
    });
  });
});
