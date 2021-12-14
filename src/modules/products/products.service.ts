import {
    InternalServerErrorException,
    RequestTimeoutException,
    NotFoundException,
    Injectable,
} from '@nestjs/common';
import {
    CreateProductRequestDto,
    UpdateProductRequestDto,
    ProductResponseDto,
} from './dtos';
import { ProductMapper } from './product.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { TimeoutError } from 'rxjs';
import { Repository } from 'typeorm';
import { ProductEntity } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private productsRepository: Repository<ProductEntity>,
    ) { }

    /**
     * Get a paginated product list
     * @param pagination {PaginationRequest}
     * @returns {Promise<PaginationResponse<ProductResponseDto>>}
     */
    public async getProducts(): Promise<ProductResponseDto[]> {
        try {
            const products = await this.productsRepository.find();
            return products.map(product => {
                return ProductMapper.toDto(product);
            });
        } catch (error) {
            console.log(error);
            
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


    /**
     * Create new product
     * @param nationalityDto {CreateProductRequestDto}
     * @param user {UserEntity}
     * @returns {Promise<ProductResponseDto>}
     */
    // public async createNationality(nationalityDto: CreateProductRequestDto, user: UserEntity): Promise<ProductResponseDto> {
    //     try {
    //         let nationalityEntity = ProductMapper.toCreateEntity(nationalityDto, user);
    //         nationalityEntity = await this.nationalitiesRepository.save(nationalityEntity);
    //         return ProductMapper.toDto(nationalityEntity);
    //     } catch (error) {
    //         if (error.code == DBErrorCode.PgUniqueConstraintViolation) {
    //             throw new UniqueKeyException(
    //                 ErrorType.NationalityExists,
    //                 `There's a nationality with name '${nationalityDto.name}'`
    //             );
    //         }
    //         if (error instanceof TimeoutError) {
    //             throw new RequestTimeoutException();
    //         } else {
    //             throw new InternalServerErrorException();
    //         }
    //     }
    // }

    /**
     * Update nationality by id
     * @param id {string}
     * @param nationalityDto {UpdatePermissionRequestDto}
     * @returns {Promise<ProductResponseDto>}
     */
    // public async updateNationality(id: string, nationalityDto: UpdateProductRequestDto): Promise<ProductResponseDto> {

    //     let nationalityEntity = await this.nationalitiesRepository.findOne(id);
    //     if (!nationalityEntity) {
    //         throw new NotFoundException();
    //     }

    //     try {
    //         nationalityEntity = ProductMapper.toUpdateEntity(nationalityEntity, nationalityDto);
    //         nationalityEntity = await this.nationalitiesRepository.save(nationalityEntity);
    //         return ProductMapper.toDto(nationalityEntity);
    //     } catch (error) {
    //         if (error.code == DBErrorCode.PgUniqueConstraintViolation) {
    //             throw new UniqueKeyException(
    //                 ErrorType.NationalityExists,
    //                 `There's a nationality with name '${nationalityDto.name}'`
    //             );
    //         }
    //         if (error instanceof TimeoutError) {
    //             throw new RequestTimeoutException();
    //         } else {
    //             throw new InternalServerErrorException();
    //         }
    //     }
    // }
}
