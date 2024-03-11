import User from "../entity/user.entity";
import { TUser } from "../interfaces/IUser";
import UserRepository from "../repositories/repository";

export default class UserService {
  userRepository: UserRepository;

  constructor({ userRepository }: { userRepository: any }) {
    this.userRepository = userRepository;
  }

  async find(query: any) {
    const users = await this.userRepository.find();

    return users.map(({ first_name, ...result }) => new User({ first_name, ...result }))

  }

  async create(data: any) {
    if (!new User(data).isValid()) {
      return {
        error: {
          message: "invalid data",
          data: data,
        },
      };
    }

    const result = await this.userRepository.create(data);

    return result
  }

}

