import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  
  @InjectRepository(Product)
  private readonly productRepository:Repository<Product>
  
  async create(createProductDto: CreateProductDto) {
    
    const product = this.productRepository.create(createProductDto)

    return this.productRepository.save(product)
  }

  async findAll() {
    return this.productRepository.find()
  }

  async findOne(id: number) {
    return this.productRepository.findOne({
      where:{
        product_id:id
      }
    })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    
    const isRegistered = await this.findOne(id)
    if(!isRegistered){
      throw new NotFoundException('Produto Não Encontrado!')
    }

    const product = await this.productRepository.preload({
      product_id:id,
      ...updateProductDto
    })

        
    return this.productRepository.save(product)
  }

  async remove(id: number) {
    
    const isRegistered = await this.findOne(id)
    if(!isRegistered){
      throw new NotFoundException('Produto Não Encontrado!')
    }

    this.productRepository.remove(isRegistered)
   
    
  }
}
