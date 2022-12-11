const generateCaptcha = (captchalength: number) => {
  let text = "";
  let i;
  for (i = 0; i < captchalength; i += 1) {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        text += String.fromCharCode(48 + Math.floor(Math.random() * 10));
        break;
      case 1:
        text += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        break;
      case 2:
        text += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        break;
      default:
        break;
    }
  }
  return text;
};

export { generateCaptcha };
