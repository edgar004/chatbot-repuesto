import { ReservationEntity } from './reservations.entity';
import {
  CreateReservationRequestDto,
  UpdateProductRequestDto,
  ReservationResponseDto,
} from './dtos';
import { ProductMapper } from '@modules/products/product.mapper';
import { ProductEntity } from '@modules/products/products.entity';

export class ReservationMapper {

  public static async toDto(entity: ReservationEntity): Promise<ReservationResponseDto> {
    const dto = new ReservationResponseDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.price = entity.price;
    dto.product = ProductMapper.toDto(await entity.product);
    return dto;
  }

  public static toCreateEntity(dto: CreateReservationRequestDto): ReservationEntity {
    const entity = new ReservationEntity();
    entity.name = dto.name;
    entity.identificationCard = dto.identificationCard;
    entity.amount = dto.amount;
    entity.email = dto.email;
    entity.price = dto.price;
    entity.product = Promise.resolve(new ProductEntity({ id: dto.idProduct }));
    entity.date = new Date();
    return entity;
  }

  public static toUpdateEntity(
    entity: ReservationEntity,
    dto: UpdateProductRequestDto
  ): ReservationEntity {
    // entity.name = dto.name;
    // entity.amount = dto.amount;
    // entity.price = dto.price;
    // entity.img = dto.img;
    return entity;
  }
}
