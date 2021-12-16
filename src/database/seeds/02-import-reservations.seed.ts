//try-part imports
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { reservations } from '@database/data/reservations.data';
import { ReservationMapper } from '../../modules/reservations/reservation.mapper';

export default class ProductSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        console.time('Time spent');
        await connection.transaction(async (manager) => {
            const ReservationEntity = reservations.map(
                (reservation) => ReservationMapper.toCreateEntity(reservation)
            );
            await manager.save(ReservationEntity);
        });
        console.timeEnd('Time spent');
    }
}
