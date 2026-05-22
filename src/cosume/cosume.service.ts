import { Injectable } from '@nestjs/common';
import { CreateCosumeDto } from './dto/create-cosume.dto';
import { UpdateCosumeDto } from './dto/update-cosume.dto';

@Injectable()
export class CosumeService {
  create(createCosumeDto: CreateCosumeDto) {
    return 'This action adds a new cosume';
  }

  findAll() {
    return `This action returns all cosume`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cosume`;
  }

  update(id: number, updateCosumeDto: UpdateCosumeDto) {
    return `This action updates a #${id} cosume`;
  }

  remove(id: number) {
    return `This action removes a #${id} cosume`;
  }
}
