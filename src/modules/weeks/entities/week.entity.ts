import { Season } from 'src/modules/seasons/entities/season.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Week {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  matchWeekNumber: number;

  @ManyToOne(() => Season)
  season: Season;
}
