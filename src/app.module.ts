import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './modules/players/players.module';
import { ConfigModule } from '@nestjs/config';
import { Player } from './modules/players/player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubsModule } from './modules/clubs/clubs.module';
import { Club } from './modules/clubs/entities/club.entity';
import { GamesModule } from './modules/games/games.module';
import { Game } from './modules/games/entities/game.entity';
import { Season } from './modules/seasons/entities/season.entity';
import { SeasonsModule } from './modules/seasons/seasons.module';
import { TeamsModule } from './modules/teams/teams.module';
import { WeeksModule } from './modules/weeks/weeks.module';
import { ResultsModule } from './modules/results/results.module';

@Module({
  imports: [
    // TODO: use the custom data source factory to use env file.
    // See: https://docs.nestjs.com/techniques/database#custom-datasource-factory
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'beulec',
      password: 'not_in_prod',
      database: 'diy_fc',
      entities: [Player, Club, Game, Season],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    PlayersModule,
    ClubsModule,
    GamesModule,
    SeasonsModule,
    TeamsModule,
    WeeksModule,
    ResultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
