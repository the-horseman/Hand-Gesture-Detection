import React, { useContext } from 'react'
import { AuthContext } from '../helpers/AuthContext';

function Right() {

	const { showCanvas, curBatsman, batsmanScore, aiValue, userValue, required, gameFinished } = useContext(AuthContext);

	function callfunc() {
		return (
			<div id="det-res">
				<p>Current Batsman : {curBatsman}</p>
				<p>Batsman's Score : {batsmanScore}</p>
				<p>AI Current Value : {aiValue}</p>
				<p>User Current Value : {userValue}</p>
				{required == null ? <p>The score is being set.</p> : <p>Required Value : {required}</p>}
			</div>
		)
	}

	return (
		<div id='rt-box'>
			{ gameFinished == null ?
				showCanvas ?
					callfunc() :
					<p id='greet'>Happy Playing!</p> :
					gameFinished === "Completed" ? 
					<p id='greet'>Game Finished!</p> : 
					<p id='greet'>Game Was Stopped Midway!</p> }
		</div>
	)
}

export default Right