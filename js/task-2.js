

function getShippiingMessage(country, price, deliveryFee) {
    getShippiingMessage = `Shipping to ${country} will cost ${price + deliveryFee} credits`;
  console.log(getShippiingMessage);
 }

getShippiingMessage ("Germany", 67, 89);