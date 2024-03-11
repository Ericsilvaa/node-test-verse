import { TUser } from "../interfaces/IUser";
import UserRepository from "../repositories/repository";

export default class UserService {
  userRepository: UserRepository;

  constructor({ userRepository }: { userRepository: any }) {
    this.userRepository = userRepository;
  }

  async find(query: any) {
    const users = await this.userRepository.find(query);

    return users.map((u) => ({
      ...u,
      first_name: u.first_name.toUpperCase(),
    }))

  }

}

