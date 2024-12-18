import { IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 255)
  readonly name: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsPhoneNumber('CI')
  readonly phone: string;

  @IsString()
  readonly password: string;
}
