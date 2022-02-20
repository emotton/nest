import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Api {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

}