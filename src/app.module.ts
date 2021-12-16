import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { defaultConnection } from '@config';
import { ProductsModule } from './modules/products/products.module';
import { AppService } from './app.service';
import { ReservationsModule } from '@modules/reservations/reservations.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env']
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: defaultConnection,
      inject: [ConfigService],
    }),
   ProductsModule,
   ReservationsModule
  ],
	providers: [AppService],

  
})
export class AppModule { }
