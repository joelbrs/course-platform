import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthDtoIn, AuthDtoOut } from '@/domain/dtos/auth.dto';
import { compareHash } from '@/infra/utils/hashs/compare-hash';
import { JwtService } from '@nestjs/jwt';
import { generateHash } from '@/infra/utils/hashs/generate-hash';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async authenticate(data: AuthDtoIn): Promise<AuthDtoOut> {
    const { id, name, password, type } = await this.userService.findByEmail(
      data.email,
    );

    const passwordMatches = compareHash(password, generateHash(data.password));

    if (!passwordMatches) {
      throw new UnauthorizedException();
    }

    const jwtPayload = { sub: id, name, type };
    const access_token = await this.jwtService.signAsync(jwtPayload);

    return { access_token };
  }
}
