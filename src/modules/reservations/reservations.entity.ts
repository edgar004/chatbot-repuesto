import { ProductEntity } from '@modules/products/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

@Entity({ schema: 'public', name: 'reservaciones' })
export class ReservationEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
    id: number;

    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 60,
    })
    name: string;

    @Column({
        name: 'cedula',
        type: 'varchar',
        length: 13,
    })
    identificationCard: string;

    @Column({
        name: 'correo',
        type: 'varchar',
        length: 60,
    })
    email: string;

    @Column({
        name: 'cantidad',
        type: 'int',
    })
    amount: number;

    @Column({
        name: 'precio',
        type: 'int',
    })
    price: number;

    @Column({
        name: 'estado',
        type: 'boolean',
        nullable: false,
        default: false
    })
    status: boolean;

    @Column({
        name: 'fecha',
        type: 'timestamp',
        nullable: false
      })
      date: Date;

    @ManyToOne(
        () => ProductEntity,
        product => product.id,
        { lazy: true, cascade: false },
    )
    @JoinColumn({ name: 'idproducto', referencedColumnName: 'id' })
    product: Promise<ProductEntity>;

    constructor(reservationEntity?: Partial<ReservationEntity>) {
        super();
        Object.assign(this, reservationEntity);
    }
}
