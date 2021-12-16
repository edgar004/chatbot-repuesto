import { ReservationsService } from './reservations.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationController } from './reservations.controller';
import { ReservationEntity } from './reservations.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReservationEntity
    ]),
  ],
  controllers: [ReservationController],
  providers: [ReservationsService],
})
export class ReservationsModule { }
