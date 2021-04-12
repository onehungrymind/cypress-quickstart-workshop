import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '../database/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  all(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  find(@Param() id: string): Promise<User> {
    return this.usersService.get(id);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.usersService.update(user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
