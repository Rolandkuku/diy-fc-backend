import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Player {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
