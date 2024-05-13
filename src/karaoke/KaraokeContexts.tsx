export interface iType {
	Title: string;
	Composer: string;
	Vocal: string;
	JOYSOUND: number;
	Date: number;
}

export interface qType {
	Title: string;
	Composer: string;
	JOYSOUND: number;
	Quote: string;
}

const unicodify = (jsonString: string) => {
	const unicodeRegex = /\\u([\dA-Fa-f]{4})/g;
	return jsonString.replace(unicodeRegex, (_, p1) => String.fromCharCode(parseInt(p1, 16)));
};

export const datify = (jsonDate: number) => {
	const date = new Date(jsonDate);
	return `${date.getUTCFullYear()}.${String(date.getUTCMonth()+1).padStart(2, '0')}.${String(date.getUTCDate()).padStart(2, '0')}`;
};

export const initializeUnicode = (data: iType[]) => {
	return data.map((item) => {
		const newItem: iType = {Title: unicodify(item.Title), Composer: unicodify(item.Composer), Vocal: unicodify(item.Vocal), JOYSOUND: item.JOYSOUND, Date: item.Date};
		return newItem;
	})
};

export const quoteUnicode = (data: qType[]) => {
	return data.map((item) => {
		const newItem: qType = {Title: unicodify(item.Title), Composer: unicodify(item.Composer), JOYSOUND: item.JOYSOUND, Quote: unicodify(item.Quote)};
		return newItem;
	})
}
