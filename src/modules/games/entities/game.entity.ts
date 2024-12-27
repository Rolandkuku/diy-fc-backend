import { Club } from 'src/modules/clubs/entities/club.entity';
import { Player } from 'src/modules/players/player.entity';
import { Season } from 'src/modules/seasons/entities/season.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

type Output = 'running' | 'victory' | 'fired' | 'bournout' | 'bankrupt';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Club)
  club: Club;

  @ManyToOne(() => Player)
  player: Player;

  @OneToMany(() => Season, (season) => season.game)
  seasons: Season[];

  @Column()
  currentDivision: number;

  @Column()
  currentSquidInBank: number;

  @Column()
  currentEquipmentLevel: number;

  @Column()
  currentMentalHealthLevel: number;

  @Column({ default: null })
  output: Output | null;

  @Column({ default: false })
  deactivated: boolean;
}
