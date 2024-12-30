import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';
import { Team } from '../teams/entities/team.entity';
import { Season } from '../seasons/entities/season.entity';
import { Week } from '../weeks/entities/week.entity';
import { Club } from '../clubs/entities/club.entity';
import {
  BASE_AMOUNT_OF_TEAMS,
  BASE_DIVISION_START,
  BASE_EQUIPMENT_LEVEL,
  BASE_MENTAL_HEALTH_LEVEL,
  BASE_SQUIDS_AMOUNT,
} from 'src/constants';
import { Result } from '../results/entities/result.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Season)
    private seasonRepository: Repository<Season>,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
    @InjectRepository(Week)
    private weekRepository: Repository<Week>,
    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
    @InjectRepository(Result)
    private resultRepository: Repository<Result>,
  ) {}
  async create({ clubId }: CreateGameDto) {
    const team = await this.teamRepository.save({ level: 1 });
    const otherTeams = await this.teamRepository.save(
      Array(BASE_AMOUNT_OF_TEAMS - 1)
        .fill(null)
        .map(() => ({ level: 1 })),
    );
    const allTeams = [team, ...otherTeams];
    const results = await this.resultRepository.save(
      Array(allTeams.length)
        .fill(null)
        .map((_, i) => ({
          team1: allTeams[i],
          team2: allTeams[i + 1],
          team1Score: Math.floor(Math.random() * 3),
          team2Score: Math.floor(Math.random() * 3),
        })),
    );
    const week = await this.weekRepository.save({
      matchWeekNumber: 1,
      results,
    });
    const season = await this.seasonRepository.save({
      team,
      otherTeams: otherTeams,
      weeks: [week],
    });
    const club = await this.clubRepository.findOne({
      where: { id: clubId },
      relations: { player: true },
    });
    const player = club.player;
    if (!player) {
      throw new Error('Player not found');
    }
    return await this.gameRepository.save({
      club,
      player,
      seasons: [season],
      currentDivision: BASE_DIVISION_START,
      currentSquidInBank: BASE_SQUIDS_AMOUNT,
      currentEquipmentLevel: BASE_EQUIPMENT_LEVEL,
      currentMentalHealthLevel: BASE_MENTAL_HEALTH_LEVEL,
    });
  }

  findByClubId(clubId: string) {
    return this.gameRepository.find({
      where: { club: { id: clubId }, deactivated: false },
      relations: {
        seasons: {
          team: true,
          weeks: true,
          otherTeams: true,
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: string) {
    return this.gameRepository.update(
      {
        id,
      },
      {
        deactivated: true,
      },
    );
  }
}
