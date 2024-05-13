import { useState } from 'react';
import { charType } from './GachaContext';
import gachaJson from './assets/gacha.json';
import Display from "./GachaDisplay";
import './Gacha.css';
import { Link } from 'react-router-dom';

let sixStack = 0;
let tenStack = 0;
let sixProb = 0.02;
let fiveProb = 0.08;
let fourProb = 0.5;
let threeProb = 0.4;

function funcToFixed(value: number, precision: number) {
	const power = Math.pow(10, precision || 0);
	return String(Math.round(value * power) / power);
}

function GachaApp() {
	const [dispList, setDispList] = useState<charType[]>([])
	const [rarityCnt, setRarityCnt] = useState([0, 0, 0, 0]);

	const gachaData: charType[] = gachaJson.map((d) => {return {name: d.name, rarity: Number(d.rarity), pickup: Boolean(d.pickup)}});

	const getChar = (rarity: number) => {
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
		sixProb = 0.02;
		fiveProb = 0.08;
		fourProb = 0.5;
		threeProb = 0.4;
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
		const addCnt = [0, 0, 0, 0];
		for (let i = 0; i < x; i++) {
			const rng = Math.random();
			let resRarity = 0;
			if (rng <= sixProb) {
				resRarity = 6;
			} else if (rng < sixProb + fiveProb) {
				resRarity = 5;
			} else if (rng < sixProb + fiveProb + fourProb) {
				resRarity = 4;
			} else {
				resRarity = 3;
			}

			gachaResult.push(getChar(resRarity));
			addCnt[resRarity-3]++;
			if(resRarity === 6){
				sixStack = 0;
				tenStack = 10;
			} else if(resRarity === 5){
				sixStack++; 
				tenStack = 10;
			} else {
				sixStack++;
				tenStack = Math.min(10, tenStack+1);
			}

			if(tenStack === 9){
				sixProb = 0.02;
				fiveProb = 0.98;
				fourProb = 0;
				threeProb = 0;
			} else if(sixStack >= 50) {
				sixProb = 0.02 * (sixStack - 48);
				fiveProb = (1 - sixProb) * 8 / 98;
				fourProb = (1 - sixProb) * 50 / 98;
				threeProb = 1 - sixProb - fiveProb - fourProb;
			} else {
				sixProb = 0.02;
				fiveProb = 0.08;
				fourProb = 0.5;
				threeProb = 0.4;
			}
		}
		const rev = [...gachaResult].reverse();
		for (let i = 0; i < 4; i++) {
			addCnt[i] += rarityCnt[i];
		}
		setDispList([ ...rev, ...dispList]);
		setRarityCnt([...addCnt]);
	};

	return (
		<>
			<div className="GachaApp">
        <Link to="/">Go to home.</Link>
				<Display arr={dispList}></Display>
				<button onClick={runGacha(1)}>단챠</button>
				<button onClick={runGacha(10)}>10연챠</button>
				<button onClick={reset}>리셋</button><br/>
				<span>가챠 회수: {sum(rarityCnt)}회</span><br/>
				<span>소모 합성옥: {sum(rarityCnt) * 600}개</span><br/>
				<span>오리지늄으로 변환시: {funcToFixed(sum(rarityCnt) * 600 / 180, 4)}개</span><br/>
				<span>레어도별 등장 회수: 6성 {rarityCnt[3]}회, 5성 {rarityCnt[2]}회, 4성 {rarityCnt[1]}회, 3성 {rarityCnt[0]}회</span><br/>
				<span>6성 스택: {sixStack}회 미등장</span><br/>
				<span>레어도별 등장 확률: 6성 {funcToFixed(sixProb*100, 4)}%, 5성 {funcToFixed(fiveProb*100, 4)}%, 4성 {funcToFixed(fourProb*100, 4)}%, 3성 {funcToFixed(threeProb*100, 4)}%</span>
			</div>
		</>
	)
}

export default GachaApp;