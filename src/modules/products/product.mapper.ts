import { ProductEntity } from './products.entity';
import {
  CreateProductRequestDto,
  UpdateProductRequestDto,
  ProductResponseDto,
} from './dtos';

export class ProductMapper {

  public static toDto(entity: ProductEntity): ProductResponseDto {
    const dto = new ProductResponseDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.img=entity.img;
    dto.amount=entity.amount;
    dto.price=entity.price;
    return dto;
  }

  public static toCreateEntity(dto: CreateProductRequestDto): ProductEntity {
    const entity = new ProductEntity();
    entity.name = dto.name;
    entity.amount=dto.amount;
    entity.price=dto.price;
    entity.img=dto.img;
    return entity;
  }

  public static toUpdateEntity(
    entity: ProductEntity,
    dto: UpdateProductRequestDto
  ): ProductEntity {
    entity.name = dto.name;
    entity.amount=dto.amount;
    entity.price=dto.price;
    entity.img=dto.img;
    return entity;
  }
}
