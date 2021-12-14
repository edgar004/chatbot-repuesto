import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReservationRequestDto {
    @ApiProperty()
    @IsNotEmpty()
    @Length(5, 60)
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(5, 60)
    identificationCard: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(5, 60)
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    idProduct: number;

    @ApiProperty()
    @IsNotEmpty()
    amount: number;

    @ApiProperty()
    @IsNotEmpty()
    price: number;
}
