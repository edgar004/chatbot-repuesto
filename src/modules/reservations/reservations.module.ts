import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './reservations.controller';
import { ProductsService } from './reservations.service';
import { ReservationEntity } from './reservations.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReservationEntity
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ReservationsModule { }
