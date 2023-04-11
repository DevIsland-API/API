import { Chamado } from "../../entities/Chamado";
import { FormRepository } from "../../repositories/FormRepository";

export class ListFormService {
  static async execute(): Promise<Chamado[]> {
    const forms = await FormRepository.getAll();
    // assembler para tratamento do body

    return forms; // tratar no assembler, salvar numa variável e retornar
  }
}
