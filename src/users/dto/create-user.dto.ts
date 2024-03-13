import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  readonly email: string;

  @ApiProperty({ example: '123', description: 'Пароль' })
  readonly password: string;
}
