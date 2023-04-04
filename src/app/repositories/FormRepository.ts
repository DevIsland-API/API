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

  static async findById(formId: number): Promise<Chamado> {
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

  static async createForm(form: any): Promise<Chamado> {
    try {
      return await Chamado.create(form).save();
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async update(formId: number, form: any): Promise<any> {
    try {
      const foundForm = await this.findById(formId);
      if (!foundForm) {
        throw new Error();
      }

      return await Chamado.update({ id: formId }, form);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
}
