const amountEuro = {
  fiveHundred: 500,
  twoHundred: 200,
  oneHundred: 100,
  fifty: 50,
  twenty: 20,
  ten: 10,
  five: 5,
  two: 2,
  one: 1,
  fiftyCents: 0.5,
  twentyCents: 0.2,
  tenCents: 0.1,
  fiveCents: 0.05,
  twoCents: 0.02,
  oneCent: 0.01,
};

function change(price, paidAmount) {
  let change = paidAmount - price;
  let prices = Object.values(amountEuro);
  let givenChange = [];

  console.log("------------------------------------------");
  console.log(
    "Price: €" + price,
    "// Paid amount: €" + paidAmount,
    "// Change: €" + change
  );

  if (paidAmount < price) {
    return "The paid amount is not enough!";
  } else
    for (let value in prices) {
      if (change >= prices[value]) {
        let quantity = Math.floor(change / prices[value]);
        change = (change % prices[value]).toFixed(2);

        givenChange.push(quantity + " x €" + prices[value]);
      }
    }
  return Object.assign({ givenChange });
}

console.log(change(3.75, 50));

console.log(change(4.5, 20));

console.log(change(4, 3));
