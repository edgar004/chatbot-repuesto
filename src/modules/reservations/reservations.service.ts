import { ReservationResponseDto } from './dtos/reservation-response.dto';
import {
    InternalServerErrorException,
    RequestTimeoutException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimeoutError } from 'rxjs';
import { Repository } from 'typeorm';
import { ReservationEntity } from './reservations.entity';
import { ReservationMapper } from './reservation.mapper';
import { CreateReservationRequestDto } from './dtos/create-reservations-request.dto';

@Injectable()
export class ReservationsService {
    constructor(
        @InjectRepository(ReservationEntity)
        private ReservationRepository: Repository<ReservationEntity>,
    ) { }

    /**
        * Create new reservation
        * @param reservationDto {CreateReservationRequestDto}
        * @returns {Promise<ReservationResponseDto>}
        */
    public async createReservation(reservationDto: CreateReservationRequestDto): Promise<ReservationResponseDto> {
        try {
            let reservationEntity = ReservationMapper.toCreateEntity(reservationDto);
            reservationEntity = await this.ReservationRepository.save(reservationEntity);
            return ReservationMapper.toDto(reservationEntity);
        } catch (error) {
            if (error instanceof TimeoutError) {
                throw new RequestTimeoutException();
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    /**
        * delete reservation
        * @param id {CreateReservationRequestDto}
        * @returns {Promise<ReservationResponseDto>}
        */
     public async deleteReservation(id: string): Promise<Boolean> {
        try {
            await this.ReservationRepository.delete(id);
            return true;
        } catch (error) {
            if (error instanceof TimeoutError) {
                throw new RequestTimeoutException();
            } else {
                throw new InternalServerErrorException();
            }
        }
    }


    /**
    * Get a paginated reservations list
    * @param pagination {PaginationRequest}
    * @returns {Promise<PaginationResponse<ProductResponseDto>>}
    */
    public async getReservationsByIdentificationCard(identificationCard: string): Promise<ReservationResponseDto[]> {
        try {
            const reservations = await this.ReservationRepository.find({ identificationCard,status:false});
            return await Promise.all(
                reservations.map(ReservationMapper.toDto),
            );

        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException();
            }
            if (error instanceof TimeoutError) {
                throw new RequestTimeoutException();
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}
