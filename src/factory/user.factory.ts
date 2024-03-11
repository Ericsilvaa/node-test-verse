import Database from '../config/dbConnection';
import UserRepository from '../repositories/repository';
import UserService from '../service/user.service';

export default class UserFactory {

  static async createInstance() {
    const db = new Database({ connection: 'mongodb://localhost:27017/test' })
    const dbConnection = await db.connect();

    const userRepository = new UserRepository({ dbConnection })
    const userService = new UserService({ userRepository })

    // const userRepositoryInstance = new userRepository.default({ db });
    // const userServiceInstance = new UserService.default({ userRepository: userRepositoryInstance });

    return userService;
  }

}