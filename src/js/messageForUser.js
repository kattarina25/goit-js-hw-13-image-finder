import 'pnotify/dist/PNotifyBrightTheme.css';
import 'pnotify/dist/es/PNotifyAnimate';
import PNotify from 'pnotify/dist/es/PNotify.js';

export default {
  success(findTotal) {
    PNotify.success({ text: `We found ${findTotal} images` });
  },
  error() {
    PNotify.error({ text: 'Try again. Images not found ;(' });
  },
  clearAllMessage() {
    PNotify.closeAll();
  },
  finishList() {
    PNotify.info({
      text: 'You looked all images. Enter new data',
    });
  },
};
