import React, { useContext } from 'react'
import Webcam from 'react-webcam'
import { AuthContext } from '../helpers/AuthContext'

function Camera() {
    const { setGameFinished } = useContext(AuthContext);

    const webcamRef = React.useRef(null)

    const videoConstraints = {
        width: 300,
        height: 300
    }

    return (
        <div id='stp-2'>
            <div id='cam'>
                <Webcam
                    id='img'
                    audio={false}
                    style={{ transform: 'scaleX(-1)' }}
                    videoConstraints={videoConstraints}
                    screenshotFormat="image/jpeg"
                    screenshotQuality={1}
                    ref={webcamRef}
                />
                <div id="butts">
                    <button
                        className='det-but'
                        id='chs-but'>
                        Choose
                    </button>
                    <button
                        className='det-but'
                        id='qt-but'
                        onClick={() => { setGameFinished("Incomplete") }}>
                        Quit
                    </button>
                </div>
            </div>
            <p id='pred'>Predicted Value = { }</p>
        </div>
    )
}

export default Camera