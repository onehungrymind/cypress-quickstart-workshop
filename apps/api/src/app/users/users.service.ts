import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ email });
  }

  async get(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id);
    if (!user) throw new NotFoundException();
    return user;
  }

  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async update(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async delete(id: string): Promise<DeleteResult> {
    const user = await this.usersRepository.findOne(id);
    if (!user) throw new NotFoundException();
    return await this.usersRepository.delete(id);
  }
}
