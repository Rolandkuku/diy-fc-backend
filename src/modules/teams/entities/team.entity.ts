import { Season } from 'src/modules/seasons/entities/season.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  level: number;

  @OneToMany(() => Season, (season) => season.team)
  season: Season;
}
