import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';
import { Repository } from 'typeorm';
import { Player } from '../players/player.entity';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async create({ name, playerId }: CreateClubDto) {
    const player = await this.playerRepository.findOneByOrFail({
      id: playerId,
    });
    return this.clubRepository.save({
      name,
      player,
    });
  }

  findAll() {
    return this.clubRepository.find({ relations: { player: true } });
  }

  findOne(id: string) {
    return this.clubRepository.findOneBy({ id });
  }

  update(id: string, updateClubDto: UpdateClubDto) {
    return this.clubRepository.update({ id }, updateClubDto);
  }

  remove(id: string) {
    return this.clubRepository.delete({ id });
  }
}
