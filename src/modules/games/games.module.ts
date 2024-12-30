import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Season } from '../seasons/entities/season.entity';
import { Team } from '../teams/entities/team.entity';
import { Week } from '../weeks/entities/week.entity';
import { Club } from '../clubs/entities/club.entity';
import { Result } from '../results/entities/result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Season, Team, Week, Club, Result])],
  controllers: [GamesController],
  providers: [GamesService],
  exports: [TypeOrmModule],
})
export class GamesModule {}
