import { CreateReservationRequestDto } from '../../modules/reservations/dtos/create-reservations-request.dto';


export const reservations: CreateReservationRequestDto[] = [
    {
        name: 'Jose Alvarez',
        identificationCard: '000-0000000-0',
        email: 'prueba@gmail.com',
        amount: 30,
        price: 3000,
        idProduct: 1,
    }, {
        name: 'Rosa Rodriguez',
        identificationCard: '000-0000000-1',
        email: 'prueba1@gmail.com',
        amount: 2,
        price: 3000,
        idProduct: 2,
    }, {
        name: 'Miguel Tejadas',
        identificationCard: '000-0000000-3',
        email: 'prueba3@gmail.com',
        amount: 10,
        price: 1500,
        idProduct: 3,
    }
]

