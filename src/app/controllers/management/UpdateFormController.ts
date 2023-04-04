import { CreateFormService } from "@/app/services/CreateFormService";
import { Request, Response } from "express";

export class UpdateFormController {
  static async handle(request: Request, response: Response): Promise<Response> {
    try {
      const form = request.body;
      const formId = request.params.id;

      const createdForm = await CreateFormService.execute(form);

      return response
        .status(200)
        .send({ message: "Chamado criado com sucesso", created: createdForm });
    } catch (error) {
      console.log("error -->", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}
