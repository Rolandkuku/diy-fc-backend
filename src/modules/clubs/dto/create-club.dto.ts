import { IsDefined, IsNotEmpty } from 'class-validator';

export class CreateClubDto {
  @IsNotEmpty()
  name: string;

  @IsDefined()
  @IsNotEmpty()
  playerId: string;
}
