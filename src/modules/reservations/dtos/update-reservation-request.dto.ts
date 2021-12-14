import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateReservationRequestDto } from './create-reservations-request.dto';

export class UpdateProductRequestDto extends CreateReservationRequestDto {
    @ApiProperty()
    @IsNotEmpty()
    status: boolean;
}
