import knex from "knex";

export abstract class BaseDatabase {
  private connectionData = {
    host: "ec2-54-172-10-246.compute-1.amazonaws.com",
    port: 3306,
    user: "root",
    password: "senhabd",
    database: "f4ma"
  };

  protected connection = knex({
    client: "mysql",
    connection: this.connectionData
  });
}
