import {  IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateProductRequestDto } from './create-product-request.dto';

export class UpdateProductRequestDto extends CreateProductRequestDto {
    @ApiProperty()
    @IsNotEmpty()
    id: number;
}
