exports = module.exports = {
    calcAmt(mrp, discount, tax) {
        if (typeof mrp !== 'number') {
            throw new Error('Values have to be numbers')
        }
        if (typeof discount !== 'number') {
            throw new Error('Values have to be numbers')
        }
        if (typeof tax !== 'number') {
            throw new Error('Values have to be numbers')
        }
        if (tax <= 0) {
            throw new Error('TAX must be positive')
        }
        if (discount <= 0 || discount > 100) {
            throw new Error('Discount must be between 0 and 100')
        }

        mrp = mrp - ((discount / 100) * mrp)
        mrp = mrp + ((tax / 100) * mrp)
        return mrp
    }
}