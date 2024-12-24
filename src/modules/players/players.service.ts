import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
  ) {}

  findAll(): Promise<Player[]> {
    return this.playersRepository.find();
  }

  findOne(id: string): Promise<Player | null> {
    return this.playersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.playersRepository.delete(id);
  }

  async create({ name }: { name: string }) {
    await this.playersRepository.save({
      name,
    });
  }
}
