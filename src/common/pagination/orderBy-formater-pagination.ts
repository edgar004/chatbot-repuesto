export const FormatOrderBy = (
	order: { [field: string]: 'ASC' | 'DESC' },
	aliasRelations: string,
) => {
	let toSnakeCase;
	let key;

	if (order) {
		toSnakeCase = camelToSnakeCase(Object.keys(order)[0]);

		key = `${aliasRelations}.${toSnakeCase}`;
	}

	return {
		[key]: Object.values(order)[0],
	};
};

const camelToSnakeCase = (str) =>
	str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
