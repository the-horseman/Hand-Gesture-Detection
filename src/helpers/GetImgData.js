// const cv = require('../helpers/opencv');

function getImgData(image) {
    // let img = cv.imread(image);
    // cv.resize(img, img, new cv.Size(300, 300), 0, 0, cv.INTER_AREA);
    // cv.cvtColor(img, img, cv.COLOR_RGBA2GRAY, 0);
    // cv.GaussianBlur(img, img, new cv.Size(9, 9), 0, 0, cv.BORDER_DEFAULT);
    // cv.adaptiveThreshold(img, img, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 71, 3);
    // cv.imshow('canvasOutput', img);
    let can = document.createElement('canvas');
    // let can = document.getElementById('canvasOutput');
    can.width = 300;
    can.height = 300;
    // cv.imshow(can, img);
    // console.log(image);
    let ctx = can.getContext('2d');
    ctx.drawImage(image, 0, 0);
    let imgData = ctx.getImageData(0, 0, 300, 300);
    // console.log(imgData);
    return imgData;

}

export default getImgData;