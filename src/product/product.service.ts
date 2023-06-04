import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
