import { applyDecorators, Type } from '@nestjs/common';
import {
	ApiCreatedResponse,
	getSchemaPath,
	ApiExtraModels,
} from '@nestjs/swagger';

export const ApiCreateResponse = <TModel extends Type<any>>(model: TModel) => {
	return applyDecorators(
		ApiExtraModels(Response, model),
		ApiCreatedResponse({
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
