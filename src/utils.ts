export interface GeneralObject {
	[index: string]: any;
}

export const extractAsKeyValue = (object: GeneralObject) => ({
	key: Object.keys(object)[0],
	value: Object.values(object)[0],
});
