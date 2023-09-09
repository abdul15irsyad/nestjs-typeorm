import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneWithPassword({ email });
    if (!user || !compareSync(password, user.password)) return null;
    return user;
  }
}
