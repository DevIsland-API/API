import { ArquivoMidia } from "../entities/ArquivoMidia";

export class FileRepository {
  static async getAllByForm(formId: number): Promise<ArquivoMidia[]> {
    try {
      const foundFile = await ArquivoMidia.find({
        where: {
          idChamado: formId,
        },
      });

      return foundFile;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  static async create(formId: number, fileName: string): Promise<ArquivoMidia> {
    try {
      return await ArquivoMidia.create({
        arquivo: fileName,
        idChamado: formId,
      }).save();
    } catch (error) {
      console.log("error -->", error);
      throw new Error();
    }
  }
}
