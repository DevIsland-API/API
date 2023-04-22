import { ICreateFormDTO } from "../controllers/management/dto/CreateFormDTO";
import { IUpdateFormDTO } from "../controllers/management/dto/UpdateFormDTO";
import { Chamado } from "../entities/Chamado";

export class FormRepository {
  static async getAll(): Promise<Chamado[]> {
    try {
      // Relacionamento com a entidade de usuario não está funcionando. Precisa de correção
      const foundForm = await Chamado.find();

      return foundForm;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async getOne(formId: number): Promise<Chamado> {
    try {
      const foundForm = await Chamado.findOne({
        where: {
          id: formId,
        },
      });

      return foundForm;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async internalFindById(formId: number): Promise<Chamado> {
    try {
      const foundForm = await Chamado.findOne({
        where: {
          id: formId,
        },
      });

      if (!foundForm) {
        return null;
      }

      return foundForm;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async createForm(form: ICreateFormDTO): Promise<Chamado> {
    try {
      return await Chamado.create(form).save();
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async update(formId: number, form: IUpdateFormDTO): Promise<Chamado> {
    try {
      const foundForm = await this.internalFindById(formId);
      if (!foundForm) {
        throw new Error();
      }

      delete form.arquivo;

      await Chamado.update({ id: formId }, form);
      return await this.internalFindById(formId);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async deactivate(formId: number): Promise<Chamado> {
    try {
      const foundForm = await this.internalFindById(formId);
      if (!foundForm) {
        throw new Error();
      }

      await Chamado.update(
        { id: formId },
        {
          status: 0,
        }
      );

      return await this.internalFindById(formId);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
}
