import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { defaultConnection } from '@config';
import { AppController } from './app.controller';
import { ProductsModule } from './modules/products/products.module';
import { AppService } from './app.service';


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
   ProductsModule
  ],
	providers: [AppService],

  
})
export class AppModule { }
