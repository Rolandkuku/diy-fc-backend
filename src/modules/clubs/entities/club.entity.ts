import { Game } from 'src/modules/games/entities/game.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Game, (game) => game.club)
  games: Game[];
}
