import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findOneWithPassword(options: FindOptionsWhere<User>): Promise<User> {
    return this.userRepo.findOne({
      where: options,
      select: { id: true, password: true },
    });
  }
}
