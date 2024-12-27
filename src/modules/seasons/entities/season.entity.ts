import { Game } from 'src/modules/games/entities/game.entity';
import { Team } from 'src/modules/teams/entities/team.entity';
import { Week } from 'src/modules/weeks/entities/week.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Season {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Game)
  game: Game;

  @OneToMany(() => Week, (week) => week.season)
  weeks: Week[];

  @ManyToOne(() => Team)
  team: Team;

  @OneToMany(() => Team, (team) => team.season)
  otherTeams: Team[];
}
