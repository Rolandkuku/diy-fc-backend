import { Team } from 'src/modules/teams/entities/team.entity';
import { Week } from 'src/modules/weeks/entities/week.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Result {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Week)
  week: Week;

  @ManyToOne(() => Team)
  team1: Team;

  @ManyToOne(() => Team)
  team2: Team;

  @Column()
  team1Score: number;

  @Column()
  team2Score: number;
}
