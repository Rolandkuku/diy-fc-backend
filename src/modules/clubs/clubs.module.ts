import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';
import { Player } from '../players/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Club, Player])],
  controllers: [ClubsController],
  providers: [ClubsService],
  exports: [TypeOrmModule],
})
export class ClubsModule {}
