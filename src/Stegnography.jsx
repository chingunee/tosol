export function encodeMessage(imageData, message) {
  const data = imageData.data;

  // encode message length in the first 32 bits of the image data
  const messageLength = message.length;
  data[0] = (messageLength >> 24) & 0xff;
  data[1] = (messageLength >> 16) & 0xff;
  data[2] = (messageLength >> 8) & 0xff;
  data[3] = messageLength & 0xff;

  // encode each character of the message in the LSB of each color channel of each pixel
  let dataIndex = 0;
  for (let i = 4; i < data.length; i += 4) {
    if (dataIndex < messageLength) {
      const character = message.charCodeAt(dataIndex++);
      data[i] = (data[i] & 0xfe) | ((character >> 15) & 0x01);
      data[i + 1] = (data[i + 1] & 0xfe) | ((character >> 7) & 0x01);
      data[i + 2] = (data[i + 2] & 0xfe) | (character & 0x01);
    } else {
      break;
    }
  }

  return imageData;
}

export function decodeMessage(imageData) {
  const data = imageData.data;

  // read message length from the first 32 bits of the image data
  const messageLength =
    (data[0] << 24) | (data[1] << 16) | (data[2] << 8) | data[3];

  // decode each character of the message from the LSB of each color channel of each pixel
  let message = "";
  let dataIndex = 0;
  for (let i = 4; i < data.length; i += 4) {
    if (dataIndex < messageLength) {
      const character =
        ((data[i] & 0x01) << 15) |
        ((data[i + 1] & 0x01) << 7) |
        (data[i + 2] & 0x01);
      message += String.fromCharCode(character);
      dataIndex++;
    } else {
      break;
    }
  }

  return message;
}
