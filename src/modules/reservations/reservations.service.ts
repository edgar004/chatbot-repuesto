import {
    InternalServerErrorException,
    RequestTimeoutException,
    NotFoundException,
    Injectable,
} from '@nestjs/common';
import {
    ReservationResponseDto,
} from './dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { TimeoutError } from 'rxjs';
import { Repository } from 'typeorm';
import { ReservationEntity } from './reservations.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ReservationEntity)
        private productsRepository: Repository<ReservationEntity>,
    ) { }


}
