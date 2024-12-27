import { IsDefined } from 'class-validator';

export class CreateGameDto {
  @IsDefined()
  clubId: string;
}
