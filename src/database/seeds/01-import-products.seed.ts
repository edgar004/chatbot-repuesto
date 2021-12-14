//try-part imports
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { products } from '@database/data/products.data';
import { ProductMapper } from '../../modules/products/product.mapper';

export default class ProductSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        console.time('Time spent');
        await connection.transaction(async (manager) => {
            const ProductEntity = products.map(
                (product) => ProductMapper.toCreateEntity(product)
            );
            await manager.save(ProductEntity);
        });
        console.timeEnd('Time spent');
    }
}
