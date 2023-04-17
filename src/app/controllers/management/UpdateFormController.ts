import { Request, Response } from "express";
import { UpdateFormService } from "../../services/management/UpdateFormService";
import { IUpdateFormDTO } from "./dto/UpdateFormDTO";

export class UpdateFormController {
  static async handle(
    request: Request<IUpdateFormDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const updatedForm = await UpdateFormService.execute(
        request.params.id,
        request.body
      );

      return response.status(200).send({
        message: "Chamado atualizado com sucesso!",
        created: updatedForm,
      });
    } catch (error) {
      console.log("error -->", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}
