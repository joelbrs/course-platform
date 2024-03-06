import { $Enums, User } from '@prisma/client';

export class UserModel implements User {
  id: string;
  cpf: string;
  name: string;
  email: string;
  password: string;
  type: $Enums.UserType;
}
