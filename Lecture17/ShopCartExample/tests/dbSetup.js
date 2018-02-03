const expect = require('chai').expect
const {db, Category} = require('../src/db/models')

before((done) => {
    db.sync({force: true}).then(() => done())
})

describe('Category Model tests', () => {



    it('should add category', (done) => {
        Category.create({
            name: 'A Category',
            tax_perc: 12
        }).then((category) => {
            expect(category.name).to.equal('A Category')
            expect(category.tax_perc).to.equal(12)
            done()
        }).catch(err => done(err))
    })


})

after(() => {
    db.close()
})