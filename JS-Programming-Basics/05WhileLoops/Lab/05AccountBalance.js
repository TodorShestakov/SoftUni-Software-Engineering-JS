function balance(input) {

    let deposit = input[0];
    let totalBalance = 0;
    let index = 0;

    while (deposit !== 'NoMoreMoney') {

        let amount = Number(deposit);

        if (amount < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        totalBalance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        index++;
        deposit = input[index];
    }
    console.log(`Total: ${totalBalance.toFixed(2)}`);
}
balance(["120",
    "45.55",
    "-150"])



