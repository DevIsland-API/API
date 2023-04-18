import { Request, Response } from "express";
import { DeleteFormService } from "../../services/management/DeleteFormService";
import { IDeleteFormDTO } from "./dto/DeleteFormDTO";

export class DeleteFormController {
  static async handle(
    request: Request<IDeleteFormDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const deletedForm = await DeleteFormService.execute(request.params.id);

      return response.status(200).send({
        message: "Chamado desativado com sucesso!",
        created: deletedForm,
      });
    } catch (error) {
      console.log("error -->", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}
