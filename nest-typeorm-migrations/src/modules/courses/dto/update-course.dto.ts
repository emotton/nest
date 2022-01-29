import { IsString } from "class-validator";
import { Tag } from '../entities/tag.entity';

export class UpdateCourseDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString({ each: true })
    tags: Tag[]; 
}
