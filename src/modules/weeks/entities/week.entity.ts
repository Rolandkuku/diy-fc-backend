import { Result } from 'src/modules/results/entities/result.entity';
import { Season } from 'src/modules/seasons/entities/season.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Week {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  matchWeekNumber: number;

  @ManyToOne(() => Season)
  season: Season;

  @OneToMany(() => Result, (result) => result.week)
  results: Result[];
}
