import {
    ValidationPipe,
    Controller,
    Body,
    Post,
    Get,
    Param,
} from '@nestjs/common';
import {
    ApiInternalServerErrorResponse,
    ApiUnauthorizedResponse,
    ApiForbiddenResponse,
    ApiConflictResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiNotFoundResponse,
} from '@nestjs/swagger';
import { ReservationResponseDto } from './dtos';
import { ReservationsService } from './reservations.service';
import { CreateReservationRequestDto } from './dtos/create-reservations-request.dto';

@ApiTags('Reservations')
@Controller('reservations')
export class ReservationController {

    constructor(private ReservationsService: ReservationsService) { }

    @ApiOperation({ description: 'Get a paginated reservations list' })
    @ApiOkResponse({
        description: 'Reservation found', type: ReservationResponseDto,
        isArray: true
    })
    @ApiNotFoundResponse({ description: 'Reservations not found' })
    @ApiForbiddenResponse({ description: 'Access denied' })
    @ApiUnauthorizedResponse({ description: 'Not authenticated' })
    @ApiInternalServerErrorResponse({ description: 'Server error' })
    @Get(':identificationCard')
    public getResegetReservationsByIdentificationCardrvationBy(@Param('identificationCard') identificationCard: string): Promise<ReservationResponseDto[]> {
        return this.ReservationsService.getReservationsByIdentificationCard(identificationCard);
    }

   


    @ApiOperation({ description: 'Create new reservation' })
    @ApiOkResponse({ description: 'Reservation created' })
    @ApiConflictResponse({ description: 'Reservation already exists' })
    @ApiForbiddenResponse({ description: 'Access denied' })
    @ApiUnauthorizedResponse({ description: 'Not authenticated' })
    @ApiInternalServerErrorResponse({ description: 'Server error' })
    @Post()
    public createResevation(
        @Body(ValidationPipe) reservationDto: CreateReservationRequestDto,
    ): Promise<ReservationResponseDto> {
        return this.ReservationsService.createReservation(reservationDto);
    }


}
