import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from './tag.entity';

@Entity()
export default class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @JoinTable()
    @ManyToMany((type) => Tag, (tag: Tag) => tag.courses, {
        cascade: true //, eager: true
    })
    tags: Tag[];
}