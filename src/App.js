import './App.css';
import { useState } from 'react';
import Left from './components/Left';
import Right from './components/Right';
import { AuthContext } from "./helpers/AuthContext";

function App() {

	const [showCanvas, setShowCanvas] = useState(false);
	const [curBatsman, setCurBatsman] = useState("User");
	const [batsmanScore, setBatsmanScore] = useState(0);
	const [aiValue, setAiValue] = useState(null);
	const [userValue, setUserValue] = useState(null);
	const [required, setRequired] = useState(null);
	const [gameFinished, setGameFinished] = useState(null);
	const [totUserScore, setTotUserScore] = useState(0);
	const [totAiScore, setTotAiScore] = useState(0);
	const [winner, setWinner] = useState(null);

	return (
		<div id="det-box">
			<AuthContext.Provider value={{
				showCanvas, setShowCanvas,
				curBatsman, setCurBatsman,
				batsmanScore, setBatsmanScore,
				aiValue, setAiValue,
				userValue, setUserValue,
				required, setRequired,
				gameFinished, setGameFinished, 
				totUserScore, setTotUserScore,
				totAiScore, setTotAiScore,
				winner, setWinner
			}}>
				<Left />
				<Right />
			</AuthContext.Provider>
		</div>
	);
}

export default App;
