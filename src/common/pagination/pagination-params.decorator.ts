import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { DefaultPagination } from './default-pagination.interface';

export const PaginationParams = createParamDecorator(
	(
		data: DefaultPagination = {
			defaultSkip: 0,
			defaultPage: 0,
			defaultLimit: 10,
			defaultOrder: {},
			defaultOrderDirection: 'ASC',
			maxAllowedSize: 1000,
		},
		ctx: ExecutionContext,
	) => {
		let {
			// eslint-disable-next-line prefer-const
			query: { skip, page, limit, orderBy, orderDirection, ...params },
		} = ctx.switchToHttp().getRequest();

		const {
			defaultSkip,
			defaultPage,
			defaultLimit,
			defaultOrder,
			defaultOrderDirection,
			maxAllowedSize,
		} = data;

		const order = orderBy
			? {
					[orderBy]: orderDirection
						? orderDirection
						: defaultOrderDirection,
			  }
			: defaultOrder;

		limit = limit && limit > 0 ? +limit : defaultLimit;

		if (!skip) {
			if (page) {
				skip = (+page - 1) * +limit;
				skip = skip >= 0 ? skip : 0;
			} else {
				page = defaultPage;
				skip = defaultSkip;
			}
		} else {
			page = Math.floor(+skip / limit);
		}

		limit = +limit < +maxAllowedSize ? limit : maxAllowedSize;
		return Object.assign(data ? data : {}, {
			skip,
			page,
			limit,
			order,
			params,
		});
	},
);
