import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
  ) {}

  create(createClubDto: CreateClubDto) {
    return this.clubRepository.save(createClubDto);
  }

  findAll() {
    return this.clubRepository.find();
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
