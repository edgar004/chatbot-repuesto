import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';

export const ApiOKResponse = <TModel extends Type<any>>(model: TModel) => {
	return applyDecorators(
		ApiExtraModels(Response, model),
		ApiOkResponse({
			schema: {
				allOf: [
					{ $ref: getSchemaPath(Response) },
					{
						properties: {
							payload: {
								$ref: getSchemaPath(model),
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
