import { ICreateUserDTO } from "@/app/controllers/user/dto/CreateUserDTO";
import { Usuario } from "@/app/entities/Usuario";
import { UserRepository } from "@/app/repositories/UserRepository";
import { UserValidation } from "@/app/validations/UserValidation";
import bcrypt from "bcrypt";

export class CreateUserService {
  static async execute({
    name,
    email,
    password,
    passwordConfirmation,
  }: ICreateUserDTO): Promise<Usuario> {
    UserValidation.isPasswordsEqual(password, passwordConfirmation);
    UserValidation.isEmailValid(email);

    const userData = { name, email, password, passwordConfirmation };
    const hashPassword = await bcrypt.hash(password, 12);

    const user = await UserRepository.create(
      Object.assign({}, userData, { password: hashPassword })
    );

    return user;
  }
}
