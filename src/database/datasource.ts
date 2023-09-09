import { join } from 'path';
import { DataSource } from 'typeorm';

const datasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Optimap',
  database: 'nestjs-typeorm',
  entities: [join(__dirname, '..', '**', 'entities', '*.entity.{ts,js}')],
  migrations: [join(__dirname, 'migrations', '*')],
  migrationsTableName: 'migrations',
  synchronize: false,
  logging: false,
});

export default datasource;
