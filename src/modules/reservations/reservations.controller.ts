import { ApiPaginatedResponse } from '@common/decorators';
import {
    ValidationPipe,
    Controller,
    UseGuards,
    Param,
    Body,
    Get,
    Post,
    Put,
} from '@nestjs/common';
import {
    ApiInternalServerErrorResponse,
    ApiUnauthorizedResponse,
    ApiForbiddenResponse,
    ApiNotFoundResponse,
    ApiConflictResponse,
    ApiOkResponse,
    ApiOperation,
    ApiQuery,
    ApiTags,
    ApiResponse,
    getSchemaPath,
} from '@nestjs/swagger';
import {
    // CreateProductRequestDto,
    // UpdateProductRequestDto,
    // ProductResponseDto,
} from './dtos';
import { ProductsService } from './reservations.service';
import { CreateReservationRequestDto } from './dtos/create-reservations-request.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {

    constructor(private ProductsService: ProductsService) { }

    // @ApiOperation({ description: 'Get a paginated product list' })
    // @ApiOkResponse({
    //     description: 'Products found', type: ProductResponseDto,
    //     isArray: true
    // })
    // @ApiNotFoundResponse({ description: 'Products not found' })
    // @ApiForbiddenResponse({ description: 'Access denied' })
    // @ApiUnauthorizedResponse({ description: 'Not authenticated' })
    // @ApiInternalServerErrorResponse({ description: 'Server error' })
    // @Get()
    // public getProducts(): Promise<ProductResponseDto[]> {
    //     return this.ProductsService.getProducts();
    // }

    // @ApiOperation({ description: 'Get nationality by id' })
    // @ApiOkResponse({ description: 'Nationality  found' })
    // @ApiNotFoundResponse({ description: 'Nationality  not found' })
    // @ApiForbiddenResponse({ description: 'Access denied' })
    // @ApiUnauthorizedResponse({ description: 'Not authenticated' })
    // @ApiInternalServerErrorResponse({ description: 'Server error' })
    // @Get('/:id')
    // public getNationality(@Param('id') id: string): Promise<ProductResponseDto> {
    //     return this.ProductsService.getNationalityById(id);
    // }

    // @ApiOperation({ description: 'Create new reservation' })
    // @ApiOkResponse({ description: 'Reservation created' })
    // @ApiConflictResponse({ description: 'Reservation already exists' })
    // @ApiForbiddenResponse({ description: 'Access denied' })
    // @ApiUnauthorizedResponse({ description: 'Not authenticated' })
    // @ApiInternalServerErrorResponse({ description: 'Server error' })
    // @Post()
    // public createNationality(
    //     @Body(ValidationPipe) reservationDto: CreateReservationRequestDto,
    // ): Promise<ProductResponseDto> {
    //     return this.ProductsService.createNationality(reservationDto);
    // }


}
