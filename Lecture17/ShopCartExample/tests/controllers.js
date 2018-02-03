// You should never need to number real 'unit' tests

const expect = require('chai').expect

const {db, Category} = require('../src/db/models')
const catCtrl = require('../src/controllers/categories')


describe('Category controller', () => {

    it('should add succeed for one category', (done) => {
        catCtrl.addCategory({
            name: 'One Category',
            tax_perc: 10
        }).then(category => {
            expect(category.name).to.equal('One Category')
            done()
        }).catch(err => done(err))
    })
    it('should fail for nameless category', (done) => {
        catCtrl.addCategory({
            tax_perc: 10
        }).then(category => {
            done(new Error('Category without name was added'))
        }).catch((err) => {
            expect(err.message).to.equal("Cannot create category without name")
            done()
        })
    })
})
