import { PartialType } from '@nestjs/mapped-types';
import { CreateCosumeDto } from './create-cosume.dto';

export class UpdateCosumeDto extends PartialType(CreateCosumeDto) {}
