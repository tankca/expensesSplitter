const expenses = {
  Alice: 200,
  Bob: 40,
  Charlie: 30,
  Dave: 900.10,
};

splitExpenses = (expenses) => {
  if (typeof expenses !== 'object' || expenses instanceof Array) {
    throw "Function only accepts object as its parameter."
  }

  if (Object.keys(expenses).length <= 1) {
    throw "Object length cannot be less than or equal to 1."
  }

  for (var key in expenses) {
    if (expenses.hasOwnProperty(key)) {
      if (typeof expenses[key] !== 'number') {
        throw "Object has value(s) which is not a number."
      }
    }
  }

  try {
    const people = Object.keys(expenses);
    // console.log('people: ', people)
    const numOfPeople = people.length
    // console.log('total no. of people: ', numOfPeople)

    const amountPaid = Object.values(expenses);
    // console.log('amountPaid: ', amountPaid)
    const sum = amountPaid.reduce((acc, curr) => curr + acc);
    // console.log('total amount: ', sum)
    const mean = (sum / numOfPeople).toFixed(2);
    // console.log('average amount: ', mean);

    const sortedPeople = people.sort((personA, personB) => expenses[personA] - expenses[personB]);
    // console.log('sort people according to the amount they paid (small to large): ', sortedPeople)
    // const sortedAmount = sortedPeople.map((person) => expenses[person])
    // console.log('amount they paid: ', sortedAmount)
    const sortedDifference = sortedPeople.map((person) => expenses[person] - mean);
    // console.log('difference between amount paid and average amount: ', sortedDifference)

    console.log(expenses);

    let i = 0;
    let j = sortedPeople.length - 1;
    let debt;
    let txn = 0;

    console.log('\nOutput: ')
    while (i < j) {
      txn++;
      debt = Math.min(-(sortedDifference[i]), sortedDifference[j]);
      sortedDifference[i] += debt;
      sortedDifference[j] -= debt;

      console.log(`${sortedPeople[i]} pays ${sortedPeople[j]} $${debt.toFixed(2)}`);
      if (sortedDifference[i] === 0) {
        i++;
      }

      if (sortedDifference[j] === 0) {
        j--;
      }
    }
    console.log('transactions: ', txn);
  } catch (e) {
    console.log(e)
  }
}

splitExpenses(expenses);

module.exports = { splitExpenses }
