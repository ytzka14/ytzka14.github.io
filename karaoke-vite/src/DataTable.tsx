// src/Table.tsx
import React, { useState } from 'react';
import dataJson from './assets/karaoke.json'

interface iType {
	Title: string;
	Composer: string;
	Vocal: string;
	JOYSOUND: number;
	Date: number;
}

const DataTable: React.FC = () => {
	const unicodify = (jsonString: string) => {
		const unicodeRegex = /\\u([\dA-Fa-f]{4})/g;
		return jsonString.replace(unicodeRegex, (_, p1) => String.fromCharCode(parseInt(p1, 16)));
	};

	const datify = (jsonDate: number) => {
		const date = new Date(jsonDate);
		return date;
	}

	const initializeUnicode = (data: iType[]) => {
		return data.map((item) => {
			const newItem: iType = {Title: unicodify(item.Title), Composer: unicodify(item.Composer), Vocal: unicodify(item.Vocal), JOYSOUND: item.JOYSOUND, Date: item.Date};
			return newItem;
		})
	}

	const [items, setItems] = useState<iType[]>(initializeUnicode(dataJson));
	const [sorted, setSorted] = useState(0);

	const sortBy = (n: number) => {
		switch (n) {
			case 0:
				if (sorted === 1) {
					setItems([...items].sort((a, b) => (b.Title.localeCompare(a.Title))));
					setSorted(2);
				}
				else {
					setItems([...items].sort((a, b) => (a.Title.localeCompare(b.Title))));
					setSorted(1);
				}
				break;
			case 1:
				if (sorted === 3) {
					setItems([...items].sort((a, b) => (b.Composer.localeCompare(a.Composer))));
					setSorted(4);
				}
				else {
					setItems([...items].sort((a, b) => (a.Composer.localeCompare(b.Composer))));
					setSorted(3);
				}
				break;
			case 2:
				if (sorted === 5) {
					setItems([...items].sort((a, b) => (b.Vocal.localeCompare(a.Vocal))));
					setSorted(6);
				}
				else {
					setItems([...items].sort((a, b) => (a.Vocal.localeCompare(b.Vocal))));
					setSorted(5);
				}
				break;
			case 3:
				if (sorted === 7){
					setItems([...items].sort((a, b) => (b.JOYSOUND - a.JOYSOUND)));
					setSorted(8);
				}
				else {
					setItems([...items].sort((a, b) => (a.JOYSOUND - b.JOYSOUND)));
					setSorted(7);
				}
				break;
			case 4:
				if (sorted === 9){
					setItems([...items].sort((a, b) => (b.Date - a.Date)));
					setSorted(10);
				}
				else {
					setItems([...items].sort((a, b) => (a.Date - b.Date)));
					setSorted(9);
				}
				break;
			default:
				break;
		}
	}

  return (
		<>
			<thead>
				<th onClick={() => sortBy(0)}>Title</th>
				<th onClick={() => sortBy(1)}>Composer</th>
				<th onClick={() => sortBy(2)}>Vocal</th>
				<th onClick={() => sortBy(3)}>JOYSOUND</th>
				<th onClick={() => sortBy(4)}>Date</th>
			</thead>
			<tbody>
				{items.map((item) => (
					<tr key={item.JOYSOUND}>
						<td>{item.Title}</td>
						<td>{item.Composer}</td>
						<td>{item.Vocal}</td>
						<td>{item.JOYSOUND}</td>
						<td>{datify(item.Date).toDateString()}</td>
					</tr>
				))}
			</tbody>
		</>
  );
};

export default DataTable;
