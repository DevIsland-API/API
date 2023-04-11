import { ListFormService } from "@/app/services/ListFormService";
import { Request, Response } from "express";

export class GetFormController {
  static async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listForm = await ListFormService.execute();

      return response.status(200).send(listForm);
    } catch (error) {
      console.log("error -->", error);
      return response.status(500).send({ error: "Internal Server Error" });
    }
  }
}
