import { ICreateFormDTO } from "../controllers/management/dto/CreateFormDTO";
import { IUpdateFormDTO } from "../controllers/management/dto/UpdateFormDTO";
import { Chamado } from "../entities/Chamado";

export class FormRepository {
  static async getAll(): Promise<Chamado[]> {
    try {
      const foundForm = await Chamado.find({
        relations: { usuario: true },
      });

      return foundForm;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async getOne(formId: number): Promise<Chamado> {
    try {
      const foundForm = await Chamado.findOne({
        relations: { usuario: true },
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

  static async update(formId: number, form: IUpdateFormDTO): Promise<any> {
    try {
      const foundForm = await this.internalFindById(formId);
      if (!foundForm) {
        throw new Error();
      }

      return await Chamado.update({ id: formId }, form);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async deactivate(formId: number): Promise<any> {
    try {
      const foundForm = await this.internalFindById(formId);
      if (!foundForm) {
        throw new Error();
      }

      return await Chamado.update(
        { id: formId },
        {
          status: 0,
        }
      );
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
}
