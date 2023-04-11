import { Chamado } from "../entities/Chamado";
import { FormRepository } from "../repositories/FormRepository";

export class DeleteFormService {
  static async execute(form: any, formId: number): Promise<Chamado> {
    return await FormRepository.deactivate(formId);
  }
}
