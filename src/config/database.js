import { Sequelize } from "sequelize";

const sequelize = new Sequelize("neondb", "neondb_owner", "npg_iZeC19rWSYUH", {
  host: "ep-raspy-sea-a4pgph1m.us-east-1.aws.neon.tech",
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
