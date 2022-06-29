import React, { useContext } from 'react'
import { AuthContext } from '../helpers/AuthContext';
import Camera from "./Camera"


function Left() {

    const { showCanvas, setShowCanvas, gameFinished, totUserScore, totAiScore, winner } = useContext(AuthContext);

    return (
        <div id='lft-bx'>
            {gameFinished == null ?
                showCanvas ?
                    <Camera /> :
                    <button
                        className='btn btn-white btn-animate'
                        id='str-butt'
                        onClick={() => { setShowCanvas(true); }}>
                        Start Game !
                    </button> :
                <div id="res">
                    <p className="scr">User Score : {totUserScore}
                        <br /> AI Score Score : {totAiScore}</p>
                    <br />
                    <p id="winn">Winner : {winner}</p>
                </div>}
        </div>
    )
}

export default Left