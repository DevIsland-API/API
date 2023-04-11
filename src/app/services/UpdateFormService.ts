import { Chamado } from "../entities/Chamado";
import { FormRepository } from "../repositories/FormRepository";

export class UpdateFormService {
  static async execute(form: any, formId: number): Promise<Chamado> {
    // validação
    // assembler para tratamento do body

    return await FormRepository.update(formId, form);
  }
}
