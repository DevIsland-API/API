import { IUpdateFormDTO } from "../../controllers/management/dto/UpdateFormDTO";
import { Chamado } from "../../entities/Chamado";
import { FileRepository } from "../../repositories/FileRepository";
import { FormRepository } from "../../repositories/FormRepository";

export class UpdateFormService {
  static async execute(
    formId: number,
    receivedForm: IUpdateFormDTO
  ): Promise<Chamado> {
    const form = await FormRepository.update(formId, receivedForm);
    const file = await FileRepository.create(
      receivedForm.id,
      receivedForm.arquivo
    );

    const updatedForm = Object.assign({}, form, { arquivo: file.id });

    return updatedForm;
  }
}
