import { PaginationRequest } from './pagination-request.interface';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationResponse<T> {
	@ApiProperty({ example: 1 })
	currentPage: number;
	@ApiProperty({ example: 1 })
	skippedRecords: number;
	@ApiProperty({ example: 1 })
	totalPages: number;
	@ApiProperty()
	hasNext: boolean;
	@ApiProperty()
	content: T[];
	@ApiProperty({ example: 1 })
	payloadSize: number;
	@ApiProperty({ example: 1 })
	totalRecords: number;

	/**
	 * Return pagination response
	 * @param PaginationRequest {PaginationRequest}
	 * @param totalRecords {number}
	 * @param dtos {t[]}
	 * @returns Pagination response
	 */
	static of<T>(
		{ limit, page, skip }: PaginationRequest,
		totalRecords: number,
		dtos: T[],
	): PaginationResponse<T> {
		const totalPages =
			Math.floor(totalRecords / limit) +
			(totalRecords % limit > 0 ? 1 : 0);
		const currentPage = +page > 0 ? +page : 1;
		const hasNext = currentPage <= totalPages - 1;

		return {
			totalPages: totalPages,
			payloadSize: dtos.length,
			hasNext: hasNext,
			content: dtos,
			currentPage: currentPage,
			skippedRecords: skip,
			totalRecords: totalRecords,
		};
	}
}
