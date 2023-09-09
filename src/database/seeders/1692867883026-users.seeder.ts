import { DataSource, DeepPartial } from 'typeorm';
import { Seeder } from '@jorgebodega/typeorm-seeding';
import { SeederEntity } from '../entities/seeder.entity';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword } from '../../shared/utils/password.util';
import { User } from '../../user/entities/user.entity';

export default class UsersSeeder1692867883026 extends Seeder {
  public async run(datasource: DataSource): Promise<void> {
    // if seeder already executed
    if (
      await datasource
        .getRepository(SeederEntity)
        .findOneBy({ name: UsersSeeder1692867883026.name })
    )
      return;

    const users: DeepPartial<User>[] = [
      {
        name: 'Roni',
        email: 'roni@email.com',
        password: 'Qwerty123',
      },
      {
        name: 'Teguh',
        email: 'teguh@email.com',
        password: 'Qwerty123',
      },
      {
        name: 'Rijal',
        email: 'rijal@email.com',
        password: 'Qwerty123',
      },
    ];

    await datasource.getRepository(User).save(
      users.map((user) => ({
        ...user,
        id: user.id ?? uuidv4(),
        password: hashPassword(user.password),
      })),
    );

    // add to seeders table
    await datasource
      .getRepository(SeederEntity)
      .save({ name: UsersSeeder1692867883026.name });
  }
}
