import { encode } from "node-base64-image";
import { Chamado } from "../../entities/Chamado";
import { FormRepository } from "../../repositories/FormRepository";

export class CreateFormService {
  static async execute(form: any): Promise<Chamado> {
    // validação
    // assembler para tratamento do body
    // const assembledForm = createFormAssembler().build()

    const encodedImage = await encode(form.image);

    return await FormRepository.createForm(
      Object.assign({}, form, { imagem: encodedImage })
    );
  }
}
