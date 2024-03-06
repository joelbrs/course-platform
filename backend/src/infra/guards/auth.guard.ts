import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FastifyRequest } from 'fastify';
import { env } from '../environment';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new Error('Unauthorized.');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: env.JWT_SECRET,
      });
      request['user'] = payload;
    } catch {
      throw new Error('Unauthorized.');
    }
    return true;
  }

  extractTokenFromHeader(request: FastifyRequest) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
