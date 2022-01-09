import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requestUser = this.usersRepository.findById(user_id);

    if (!requestUser || !requestUser.admin) {
      throw new Error("You are not authorized to do this action");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
