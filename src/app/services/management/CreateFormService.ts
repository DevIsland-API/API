import { ICreateFormDTO } from "../../controllers/management/dto/CreateFormDTO";
import { Chamado } from "../../entities/Chamado";
import { FileRepository } from "../../repositories/FileRepository";
import { FormRepository } from "../../repositories/FormRepository";

export class CreateFormService {
  static async execute(receivedForm: ICreateFormDTO): Promise<Chamado> {
    // let formToCreate;
    // formToCreate = formToCreate.omit(receivedForm.arquivo);
    const form = await FormRepository.createForm(receivedForm);
    const file = await FileRepository.create(form.id, receivedForm.arquivo);

    const createdForm = Object.assign({}, form, { arquivo: file.id });

    return createdForm;
  }
}
