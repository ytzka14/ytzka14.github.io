import { useState } from 'react';
import { charType } from './contexts';
import gachaJson from './assets/gacha.json';

function App() {
	const [gachaResult, setGachaResult] = useState<charType[]>([]);
	const [sixStack, setSixStack] = useState(0);

	const runGacha = (x: number) => () => {
		for (let i = 0; i < x; i++) {
			if (sixStack < 50) {
				
			}
		}
	};

	return (
		<>
			<button onClick={runGacha(1)}>단챠</button>
			<button onClick={runGacha(10)}>10연챠</button>
		</>
	)
}

export default App;