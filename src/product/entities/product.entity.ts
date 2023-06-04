import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    product_id:number

    @Column()
    product_name:string

    @Column('decimal',{precision:7,scale:2})
    product_value:number
}
