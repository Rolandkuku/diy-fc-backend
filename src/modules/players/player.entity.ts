import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
} from 'typeorm';
import { Game } from '../games/entities/game.entity';

@Entity()
@Unique(['name'])
export class Player {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Game, (game) => game.player)
  games: Game[];
}
