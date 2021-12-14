import { Response } from '@common/interceptors';
import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { PaginationResponse } from '@common/pagination';

export const ApiPaginatedResponse = <TModel extends Type<any>>(
	model: TModel,
) => {
	return applyDecorators(
		ApiExtraModels(PaginationResponse, model),
		ApiOkResponse({
			schema: {
				allOf: [
					{ $ref: getSchemaPath(Response) },
					{
						properties: {
							payload: {
								allOf: [
									{ $ref: getSchemaPath(PaginationResponse) },
									{
										properties: {
											content: {
												type: 'array',
												items: {
													$ref: getSchemaPath(model),
												},
											},
										},
									},
								],
							},
							timestamp: {
								type: 'number',
							},
						},
					},
				],
			},
		}),
	);
};
