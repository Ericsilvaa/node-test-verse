import Database from '../config/dbConnection';
import UserRepository from '../repositories/repository';
import UserService from '../service/user.service';
import loki from 'lokijs';
export default class UserFactory {

  static async createInstance() {
    const db = new loki('system', {})

    const userRepository = new UserRepository({ db })
    const userService = new UserService({ userRepository })

    // const userRepositoryInstance = new userRepository.default({ db });
    // const userServiceInstance = new UserService.default({ userRepository: userRepositoryInstance });

    return userService;
  }

}