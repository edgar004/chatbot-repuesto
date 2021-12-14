import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ schema: 'public', name: 'producto' })
export class ProductEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id_p', type: 'bigint' })
    id: number;

    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 60,
    })
    name: string;

    @Column({
        name: 'cantidad',
        type: 'int',
    })
    amount: number;

    @Column({
        name: 'precio_v',
        type: 'int',
    })
    price: number;

    @Column({
        name: 'img',
        type: 'varchar',
        length: 60,
    })
    img: string;


    constructor(productEntity?: Partial<ProductEntity>) {
        super();
        Object.assign(this, productEntity);
    }
}
