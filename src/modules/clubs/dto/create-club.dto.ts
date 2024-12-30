import { IsDefined, IsNotEmpty } from 'class-validator';

export class CreateClubDto {
  @IsDefined()
  @IsNotEmpty()
  name: string;
}
