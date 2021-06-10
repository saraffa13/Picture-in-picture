// const videoElement = document.getElementById('video');
// const button = document.getElementById('button');

// //Prompt the select media stream, pass to video element, then play 

// async function selectMediaStream() {
//     try {
//         // Which screen or video they want to share

//         const mediaStream = await navigator.mediaDevices.getDisplayMedia();
//         videoElement.srcObject = mediaStream;
//         videoElement.onloadedmetadata = () => {
//             videoElement.play();
    
//         };
//     }
//     catch (error) {
//         // console.log('Whoops, error here:',error);
//     }
// }

// button.addEventListener('click', async () => {
//     button.disabled = true;
//     await videoElement.requestPictureInPicutre();
//     button.disabled = false;

// });



// selectMediaStream();

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();

