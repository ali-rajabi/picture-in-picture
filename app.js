const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream , pass to video element , then play
async function selectMediaStram() {
  try {
    const mediaStram = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStram;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("whoops , error here: ", error);
  }
}

button.addEventListener("click", async (e) => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture

  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStram();
