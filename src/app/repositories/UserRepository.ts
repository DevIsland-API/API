import { ICreateUserDTO } from "../controllers/user/dto/CreateUserDTO";
import { Usuario } from "../entities/Usuario";

export class UserRepository {
  static async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<Usuario> {
    try {
      return await Usuario.create({
        nome: name,
        email,
        senha: password,
      });
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
}
