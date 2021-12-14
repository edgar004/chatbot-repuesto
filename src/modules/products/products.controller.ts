import {
    Controller,
    Get,
} from '@nestjs/common';
import {
    ApiInternalServerErrorResponse,
    ApiUnauthorizedResponse,
    ApiForbiddenResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
} from '@nestjs/swagger';
import {
    ProductResponseDto,
} from './dtos';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {

    constructor(private ProductsService: ProductsService) { }

    @ApiOperation({ description: 'Get a paginated product list' })
    @ApiOkResponse({
        description: 'Products found', type: ProductResponseDto,
        isArray: true
    })
    @ApiNotFoundResponse({ description: 'Products not found' })
    @ApiForbiddenResponse({ description: 'Access denied' })
    @ApiUnauthorizedResponse({ description: 'Not authenticated' })
    @ApiInternalServerErrorResponse({ description: 'Server error' })
    @Get()
    public getProducts(): Promise<ProductResponseDto[]> {
        return this.ProductsService.getProducts();
    }

}
