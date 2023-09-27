import Cropper from "cropperjs";

import "cropperjs/dist/cropper.css";
import "./style.css";

const $demoImage = document.querySelector<HTMLImageElement>("#demo-image");

if ($demoImage !== null) {
  const cropper = new Cropper($demoImage, {
    aspectRatio: 16 / 9,
    preview: ".img-preview",
  });
}
