import { Game } from 'src/modules/games/entities/game.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Game)
  game: Game;
}
