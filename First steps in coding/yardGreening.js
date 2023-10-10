function greening(arg1) {
    let area = (arg1)
    let price = (7.61 * area)
    let discount = (0.18 * price)
    let finalPrice = (price - discount)

    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
greening(150)