import { Request, Response } from "express";
import { ICreateUserDTO } from "./dto/CreateUserDTO";

export class CreateUserController {
  static async handle(
    request: Request<ICreateUserDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const { name, email, password, passwordConfirmation } =
        request.body as ICreateUserDTO;

      //   const createdForm = await CreateFormService.execute(form);

      return response
        .status(200)
        .send({ message: "Usuário criado com sucesso!", created: "yay" });
    } catch (error) {
      console.log("error -->", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}
