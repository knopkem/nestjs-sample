import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DogDto } from './interfaces/dog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DogRepository } from './dogs.repository';

@Controller('dogs')
export class DogsController {
  constructor(
    @InjectRepository(DogRepository)
    private readonly dogRepository: DogRepository,
  ) {}

  @Post()
  create(@Body() dogDto: DogDto) {
    return this.dogRepository.createDog(dogDto);
  }

  @Get()
  findAll() {
    return this.dogRepository.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogRepository.findOneDog(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dogDto: DogDto) {
    return this.dogRepository.updateDog(id, dogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogRepository.removeDog(id);
  }
}
