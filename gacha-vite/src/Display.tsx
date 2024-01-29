import { charType } from "./contexts";

const Display = (props: {arr: charType[]}) => {
	const getKey = () => {
		let cnt = 1;
		return () => {
			cnt++;
			return cnt;
		}
	}

	const keyGen = getKey();

	const Box = (char: charType) => {
		return (
			<>
				<li key={keyGen()} className="listItem">
					<div className="charBox">
						<span>{char.name}</span><br/>
						<span>{char.rarity}</span>
					</div>
				</li>
			</>
		)
	}

	return (
			<ul className="listBox">
				{props.arr.map((c: charType) => Box(c))}
			</ul>
	)
}

export default Display;