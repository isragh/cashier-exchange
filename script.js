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

  console.log("------------------------------------------");
  console.log(
    "Price:€" + price,
    "// Paid amount: €" + paidAmount,
    "// Change:"
  );

  if (paidAmount < price) {
    console.log("The paid amount is not enough!");
  } else
    for (let value in prices) {
      if (change >= prices[value]) {
        let quantity = Math.floor(change / prices[value]);
        change = (change % prices[value]).toFixed(2);

        console.log(quantity + " x €" + prices[value]);
      }
    }
}

change(3.75, 50);

change(4.5, 20);

change(4, 3);
