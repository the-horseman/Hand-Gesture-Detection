import React, { useContext, useEffect } from 'react'
import Webcam from 'react-webcam'
import { AuthContext } from '../helpers/AuthContext'
import getImgData from '../helpers/GetImgData';
const tf = require('@tensorflow/tfjs');

const gestures = ["One", "Ten", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "None"];
const usrGestr = { "One": 1, "Ten": 10, "Two": 2, "Three": 3, "Four": 4, "Five": 5, "Six": 6, "Seven": 7, "Eight": 8, "Nine": 9 };
let model = null;

function Camera() {
    const { setGameFinished, setUserValue, setAiValue, setBatsmanScore,
        batsmanScore, curBatsman, aiValue, userValue, setTotUserScore, setWinner,
        setCurBatsman, setRequired, setTotAiScore, totAiScore, totUserScore } = useContext(AuthContext);

    useEffect(() => {
        console.log(userValue, aiValue);
        if (userValue == 0 && aiValue == 0) return;
        if (userValue == aiValue) {
            if (curBatsman == "User") {
                setTotUserScore(batsmanScore);
                setCurBatsman("A.I.");
                setRequired(batsmanScore);
                setBatsmanScore(0);
            } else {
                setTotAiScore(batsmanScore);
                if (totUserScore > totAiScore ) {
                    setWinner("User");
                } else if (totUserScore < totAiScore) {
                    setWinner("A.I.");
                } else {
                    setWinner("Draw");
                }
                setGameFinished("Completed");
            }
            setAiValue(0);
            setUserValue(0);
        } else {
            if (curBatsman == "User") {
                setBatsmanScore(batsmanScore + userValue);
            } else {
                setBatsmanScore(batsmanScore + aiValue);
            }
        }
    }, [userValue, aiValue])

    const [prediction, setPrediction] = React.useState('');


    const webcamRef = React.useRef(null)
    const videoConstraints = {
        width: 300,
        height: 300
    }

    async function ldModel() {
        model = await tf.loadLayersModel("mlModel/model.json");
        console.log(model);
    }

    function predict_basic(im) {
        tf.tidy(() => {
            // const input = tf.browser.fromPixels(im, 1)
            const input = tf.browser.fromPixels(im, 3)
                .resizeNearestNeighbor([300, 300])
                .toFloat()
                .div(tf.scalar(255))
                .expandDims();
            // console.log(input.shape);
            const output = model.predict(input);
            const prediction = output.argMax(1).dataSync()[0];
            setPrediction(gestures[prediction]);
        });
    }

    const getFrame = () => {
        if (model == null) {
            ldModel();
        }
        setTimeout(() => {
            const imageSrc = webcamRef.current.getScreenshot();
            const image = new Image();
            image.src = imageSrc;
            image.onload = () => {
                const imgData = getImgData(image);
                predict_basic(imgData);
                getFrame();
            }
        }, 33);
    }

    const setScores = () => {
        setUserValue(usrGestr[prediction]);
        setAiValue(Math.floor(Math.random() * 10) + 1);
    }

    return (
        <div id='stp-2'>
            <div id='cam'>
                <Webcam
                    id='img'
                    audio={false}
                    mirrored={true}
                    videoConstraints={videoConstraints}
                    screenshotFormat="image/jpeg"
                    screenshotQuality={1}
                    ref={webcamRef}
                    onLoadedData={getFrame}
                />
                <div id="butts">
                    <button
                        className='det-but'
                        onClick={setScores}
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
            <p id='pred'>
                {prediction == '' ?
                    "Loading..." :
                    prediction == "None" ?
                        "No gesture detected" :
                        `Detected ${prediction}`
                }
            </p>
            <canvas id='canvasOutput'></canvas>
        </div>
    )
}

export default Camera