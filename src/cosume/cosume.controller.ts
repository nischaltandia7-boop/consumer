import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CosumeService } from './cosume.service';
import { CreateCosumeDto } from './dto/create-cosume.dto';
import { UpdateCosumeDto } from './dto/update-cosume.dto';

@Controller('cosume')
export class CosumeController {
  constructor(private readonly cosumeService: CosumeService) {}

  @Post()
  create(@Body() createCosumeDto: CreateCosumeDto) {
    return this.cosumeService.create(createCosumeDto);
  }

  @Get()
  findAll() {
    return this.cosumeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cosumeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCosumeDto: UpdateCosumeDto) {
    return this.cosumeService.update(+id, updateCosumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cosumeService.remove(+id);
  }
}
