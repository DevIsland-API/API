import { ConnectionOptions, DataSource, createConnection } from "typeorm";

import * as config from "../app/config/ormconfig";

export const connection = new DataSource(config as ConnectionOptions);

if (process.env.NODE_ENV !== "test") {
  createConnection(config as ConnectionOptions)
    .then(() => {
      console.log("Banco de dados conectado.");
    })
    .catch((e) => {
      console.log(e);
      console.log("Erro na conexão com o banco de dados.");
    });
}
