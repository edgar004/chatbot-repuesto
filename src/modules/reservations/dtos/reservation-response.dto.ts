import { ProductResponseDto } from './../../products/dtos/product-response.dto';
export class ReservationResponseDto {
  id: number;
  name: string;
  product: ProductResponseDto;
  amount: number;
  price: number;
}
