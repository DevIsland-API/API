import { Chamado } from "../entities/Chamado";
import { FormRepository } from "../repositories/FormRepository";

export class CreateFormService {
  static async execute(form: any): Promise<Chamado> {
    // validação
    // assembler para tratamento do body

    return await FormRepository.createForm(form);
  }
}