async function verifyMessage() {
  const { ethereum } = window;
  if (!ethereum || !ethereum.selectedAddress) {
    throw new Error("Ethereum wallet is not connected");
  }
  const address = ethereum.selectedAddress;
  const dateTime = new Date().getTime();
  const message = `Authentication required\nwallet:${address}\nnonce:${dateTime}`;

  const signature = await ethereum.request({
    method: "personal_sign",
    params: [address, message],
  });
}

export { verifyMessage };
