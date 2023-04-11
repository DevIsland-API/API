import { CreateFormService } from "@/app/services/CreateFormService";
import { Request, Response } from "express";

export class DeleteFormController {
  static async handle(request: Request, response: Response): Promise<Response> {
    try {
      const formId = request.params.id;

      const createdForm = await CreateFormService.execute(formId);

      return response.status(200).send({
        message: "Chamado desativado com sucesso!",
        created: createdForm,
      });
    } catch (error) {
      console.log("error -->", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}
