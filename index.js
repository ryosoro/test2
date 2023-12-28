const cameraWidth = 300;
const cameraHeight = 400;

 const constraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((mediaStream) => {
    const video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  })
  .catch((err) => {
    // 最後に常にエラーをチェックする
    console.error(`${err.name}: ${err.message}`);
  });
