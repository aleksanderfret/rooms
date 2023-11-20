import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoomDto } from './create-room.dto';
import { Room } from './room.entity';
import { UpdateRoomDto } from './update-room.dto';

@Controller('/rooms')
export class RoomsController {
  private games: Room[] = [];

  constructor(
    @InjectRepository(Room)
    private readonly repository: Repository<Room>
  ) {}

  @Get()
  async getAll() {
    return await this.repository.find();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.repository.findOneBy({ id });
  }

  @Post()
  async create(@Body() input: CreateRoomDto) {
    await this.repository.save(input);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateRoomDto) {
    const game = await this.repository.findOneBy({ id });

    return await this.repository.save({ ...game, ...input });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const game = await this.repository.findOneBy({ id });
    if (game) {
      await this.repository.remove(game);
    }
  }
}
