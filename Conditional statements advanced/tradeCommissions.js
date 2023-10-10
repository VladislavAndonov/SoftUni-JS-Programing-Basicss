function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;
    switch (city) {
        case 'Sofia':
            if (sales >= 0 && sales <= 500) {
                commission = 0.05 * sales;
                console.log(commission.toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.07 * sales;
                console.log(commission.toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.08 * sales;
                console.log(commission.toFixed(2));
            } else if (sales > 10000) {
                commission = 0.12 * sales;
                console.log(commission.toFixed(2));
            } else {
                console.log('error');
            }
            break;
        case 'Varna':
            if (sales >= 0 && sales <= 500) {
                commission = 0.045 * sales;
                console.log(commission.toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.075 * sales;
                console.log(commission.toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.1 * sales;
                console.log(commission.toFixed(2));
            } else if (sales > 10000) {
                commission = 0.13 * sales;
                console.log(commission.toFixed(2));
            } else {
                console.log('error');
            }
            break;
        case 'Plovdiv':
            if (sales >= 0 && sales <= 500) {
                commission = 0.055 * sales;
                console.log(commission.toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.08 * sales;
                console.log(commission.toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.12 * sales;
                console.log(commission.toFixed(2));
            } else if (sales > 10000) {
                commission = 0.145 * sales;
                console.log(commission.toFixed(2));
            } else {
                console.log('error');
            }
            break;
    
        default:
            console.log('error');
            break;
    }

}
tradeCommissions(["Kaspichan", "-50"])