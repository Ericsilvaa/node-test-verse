import { TUser } from "../../src/interfaces/IUser";
import UserService from "../../src/service/user.service";



describe('UserService test Suite', () => {
  describe('find', () => {
    let _userService: UserService;
    let MOCK_USERS: TUser[];
    let _dependencies;

    beforeEach(() => {
      MOCK_USERS = [
        { first_name: "ERIC", last_name: "oliveira", id: "irfjkbijbnkjrbnf" },
      ];

      _dependencies = {
        userRepository: {
          find: jest.fn(async () => MOCK_USERS)
        }
      };
      _userService = new UserService(_dependencies);
    });

    test('should return an array of users', async () => {
      const result = await _userService.find({});
      console.log("🚀 ~ test ~ result:", result)
      expect(result).toEqual(MOCK_USERS);
    })
  })


})