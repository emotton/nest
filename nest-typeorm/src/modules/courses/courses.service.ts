import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Course from './entities/course.entity';
import { Tag } from './entities/tag.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>
  ){}

  async findAll() {
    return await this.courseRepository.find({
      relations: ['tags'], order: { id: 'ASC'}
    });
  }

  async findOne(id: string) {
    const course = await this.courseRepository.findOne(Number(id), {
      relations: ['tags'], order: { id: 'ASC'}
    });
    if(!course){
        throw new HttpException( `Course ID ${id} not found`, HttpStatus.NOT_FOUND);
    } else {
        return course;
    }
  }

  async create(createCourseDto: CreateCourseDto){
      const tags = await Promise.all(
        createCourseDto.tags.map((name) => this.preloadTagByName(name)),
      );
      const course = await this.courseRepository.create({
        ...createCourseDto,
        tags
      });
      return this.courseRepository.save(course);
  }

  async update(id: string, updateCourseDto: UpdateCourseDto){
    const tags = await Promise.all(
      updateCourseDto.tags.map((name) => this.preloadTagByName(name)),
    );
    const course = await this.courseRepository.preload(
      {id: +id,
      ... updateCourseDto,
      tags});
    if(!course){
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    await this.courseRepository.save(course);
  }

  async remove(id: string){
    const course = await this.courseRepository.findOne(Number(id));
    if(!course){
        throw new HttpException( `Course ID ${id} not found`, HttpStatus.NOT_FOUND);
    } else {
        this.courseRepository.remove(course);
    }
  }

  private async preloadTagByName(name): Promise<Tag> {
    const tag = await this.tagRepository.findOne({ name });
    if(tag){
      return tag;
    } 
    return this.tagRepository.create({ name });
  }
}
