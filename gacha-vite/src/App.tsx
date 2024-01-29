import { useState } from 'react';
import { charType } from './contexts';
import gachaJson from './assets/gacha.json';
import Display from "./Display";
import './App.css';

function App() {
	const [dispList, setDispList] = useState<charType[]>([])
	let sixStack = 0;
	let tenStack = 0;
	const [rarityCnt, setRarityCnt] = useState([0, 0, 0, 0]);

	const gachaData: charType[] = gachaJson.map((d) => {return {name: d.name, rarity: Number(d.rarity), pickup: Boolean(d.pickup)}});

	const getChar = (rarity: number) => {
		const newRarity = [...rarityCnt];
		newRarity[rarity-3]++;
		setRarityCnt([...newRarity]);
		const filteredChars = gachaData.filter((d) => d.rarity === rarity && !d.pickup);
		const pickupChars = gachaData.filter((d) => d.rarity === rarity && d.pickup);
		if (pickupChars.length != 0) {
			const rng = Math.random();
			if (rng < 0.5) {
				return pickupChars[Math.floor(Math.random()*pickupChars.length)];
			} else {
				return filteredChars[Math.floor(Math.random()*filteredChars.length)];
			}
		} else {
			return filteredChars[Math.floor(Math.random()*filteredChars.length)];
		}
	};

	const reset = () => {
		sixStack = 0;
		tenStack = 0;
		setDispList([]);
		setRarityCnt([0, 0, 0, 0]);
	};

	const sum = (arr: number[]) => {
		let ret = 0;
		arr.forEach((n) => {ret += n;})
		return ret;
	}

	const runGacha = (x: number) => () => {
		const gachaResult = [];
		for (let i = 0; i < x; i++) {
			const rng = Math.random();
			if (sixStack < 50 && tenStack != 10) {
				if (rng < 0.02) {
					gachaResult.push(getChar(6));
					sixStack = 0;
					tenStack = 11;
				} else if (rng < 0.1) {
					gachaResult.push(getChar(5));
					sixStack++;
					tenStack = 11;
				} else if (rng < 0.6) {
					gachaResult.push(getChar(4));
					sixStack++;
					tenStack = Math.min(11, tenStack+1);
				} else {
					gachaResult.push(getChar(3));
					sixStack++;
					tenStack = Math.min(11, tenStack+1);
				}
			} else if (tenStack == 10) {
				if (rng < 0.02) {
					gachaResult.push(getChar(6));
					sixStack = 0;
					tenStack = 11;
				} else {
					gachaResult.push(getChar(5));
					sixStack++;
					tenStack = 11;
				}
			} else {
				const sixProb = 0.02 * (sixStack - 49);
				const fiveProb = (1 - sixProb) * 8 / 98;
				const fourProb = (1 - sixProb) * 50 / 98;
				if (rng < sixProb) {
					gachaResult.push(getChar(6));
					sixStack = 0;
				} else if (rng < sixProb + fiveProb) {
					gachaResult.push(getChar(5));
					sixStack++;
				} else if (rng < sixProb + fiveProb + fourProb) {
					gachaResult.push(getChar(4));
					sixStack++;
				} else {
					gachaResult.push(getChar(3));
					sixStack++;
				}
			}
		}
		const rev = [...gachaResult].reverse();
		setDispList([ ...rev, ...dispList]);
	};

	return (
		<>
			<Display arr={dispList}></Display>
			<button onClick={runGacha(1)}>단챠</button>
			<button onClick={runGacha(10)}>10연챠</button>
			<button onClick={reset}>리셋</button>
			<span>가챠 회수: {sum(rarityCnt)}회</span><br/>
			<span>소모 합성옥: {sum(rarityCnt) * 600}개</span><br/>
			<span>오리지늄으로 변환시: {sum(rarityCnt) * 600 / 180}개</span><br/>
			<span>레어도별 등장 회수: 6성 {rarityCnt[3]}회, 5성 {rarityCnt[2]}회, 4성 {rarityCnt[1]}회, 3성 {rarityCnt[0]}회</span>
		</>
	)
}

export default App;