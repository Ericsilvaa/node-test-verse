import User from "../../src/entity/user.entity";
import UserService from "../../src/service/user.service";
import crypto from 'node:crypto';

describe("UserService test Suite", () => {
  const MOCK_USERS = [
    {
      first_name: "eric",
      last_name: "oliveira",
      id: "f47c7c31-6237-4fc4-af61-1e80d64656b0",
    },
  ];

  describe("find", () => {
    let _userService: UserService;
    let _dependencies: { userRepository: any };

    beforeEach(() => {
      _dependencies = {
        userRepository: {
          find: jest.fn(async () => MOCK_USERS),
        },
      };
      _userService = new UserService(_dependencies);
    });

    test("should return an array of users", async () => {
      const expected = MOCK_USERS.map((user) => new User(({
        ...user,
        first_name: user.first_name.toUpperCase(),
      })))

      const result = await _userService.find({});

      expect(result).toEqual(expected);
    });

    test('should call userRepository.find once', async () => {
      await _userService.find({});

      expect(_dependencies.userRepository.find).toHaveBeenCalledTimes(1);
    })

  });

  describe("create", () => {
    let _userService: UserService;
    let _dependencies: { userRepository: any };

    const DEFAULT_ID = MOCK_USERS[0].id

    beforeAll(() => {
      jest.spyOn(crypto, 'randomUUID').mockImplementation(() => DEFAULT_ID as any)
    })

    afterEach(() => {
      jest.spyOn(crypto, 'randomUUID').mockRestore()
    })

    beforeEach(() => {
      _dependencies = {
        userRepository: {
          create: jest.fn(async () => MOCK_USERS[0]),
        },
      };
      _userService = new UserService(_dependencies);
    });

    test(`shouldn't save user item with invalid data`, async () => {
      const user = new User({
        first_name: "",
        last_name: "oliveira",
      });

      const expected = {
        error: {
          message: 'invalid data',
          data: user
        }
      }

      const result = await _userService.create(user);

      expect(result).toEqual(expected);

    })

    test('should return the created user', async () => {
      const result = await _userService.create(MOCK_USERS[0]);

      expect(result).toEqual(MOCK_USERS[0]);
    })

    test('should call userRepository.create once', async () => {
      await _userService.create(MOCK_USERS[0]);

      expect(_dependencies.userRepository.create).toHaveBeenCalledTimes(1);
    })
  })

})