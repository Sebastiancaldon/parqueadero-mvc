import { Sequelize } from "sequelize";

const sequelize = new Sequelize("neondb", "neondb_owner", "npg_iZeC19rWSYUH", {
  host: "ep-raspy-glitter-a4p4p7vu-pooler.us-east-1.aws.neon.tech",
  dialect: "postgres",
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
