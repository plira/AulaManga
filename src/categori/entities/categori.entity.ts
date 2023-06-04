import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity('Category')
export class Category{
    @PrimaryGeneratedColumn()
    category_id:number

    @Column()
    category_name:string
}