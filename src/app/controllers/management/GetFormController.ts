import { GetFormService } from "@/app/services/management/GetFormService";
import { Request, Response } from "express";
import { IGetFormDTO } from "./dto/GetFormDTO";

export class GetFormController {
  static async handle(
    request: Request<IGetFormDTO>,
    response: Response
  ): Promise<Response> {
    try {
      const getForm = await GetFormService.execute(request.params.id);

      return response.status(200).send(getForm);
    } catch (error) {
      console.log("error -->", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}
