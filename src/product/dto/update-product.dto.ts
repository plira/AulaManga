
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
    @ApiProperty()
    product_name:string

    @ApiProperty()
    product_value:number
}
