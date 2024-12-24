import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Post()
  createOne(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create({ name: createPlayerDto.name });
  }
}
