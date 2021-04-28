import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const isAdmin = this.usersRepository.findById(user_id);
  
    if (!isAdmin) {
      throw new Error("This user do not exist");
    }
    if (!isAdmin.admin) {
      throw new Error("This user do not exist");
    }
    const listOfUser = this.usersRepository.list()
    
    return listOfUser;

  }
}
export { ListAllUsersUseCase };
