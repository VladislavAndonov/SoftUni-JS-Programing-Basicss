function smallShop(input) {
    let product = (input[0]);
    let city = (input[1]);
    let count = Number(input[2]);
    let totalPrice = 0;

    if (city === 'Sofia') {
        switch (product) {
            case 'coffee':
                totalPrice = 0.50 * count;
                break;
            case 'water':
                totalPrice = 0.80 * count
                break;
            case 'beer':
                totalPrice = 1.20 * count
                break;
            case 'sweets':
                totalPrice = 1.45 * count
                break;
            case 'peanuts':
                totalPrice = 1.60 * count
                break;    
        }
    } else if (city === 'Plovdiv') {
        switch (product) {
            case 'coffee':
                totalPrice = 0.40 * count;
                break;
            case 'water':
                totalPrice = 0.70 * count
                break;
            case 'beer':
                totalPrice = 1.15 * count
                break;
            case 'sweets':
                totalPrice = 1.30 * count
                break;
            case 'peanuts':
                totalPrice = 1.50 * count
                break;    
        }
    } else if (city === 'Varna') {
        switch (product) {
            case 'coffee':
                totalPrice = 0.45 * count;
                break;
            case 'water':
                totalPrice = 0.70 * count
                break;
            case 'beer':
                totalPrice = 1.10 * count
                break;
            case 'sweets':
                totalPrice = 1.35 * count
                break;
            case 'peanuts':
                totalPrice = 1.55 * count
                break;    
        }
    }
    console.log(totalPrice);
}
smallShop((["coffee", "Varna", "2"]))