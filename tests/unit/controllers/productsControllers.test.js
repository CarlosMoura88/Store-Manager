const productsServices = require('../../../services/productsServices');
const productsControllers = require('../../../controllers/productsControllers');
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { afterEach } = require('mocha');

use(chaiAsPromised);

describe('Testa as funções da pasta controllers', () => {

  describe('@getAllProducts', () => {

    describe('Quando não existem produtos cadastrados', () => {

      beforeEach(() => {
        const result = [[]];
        sinon.stub(productsServices, 'getAllProducts').resolves(result)
      });

      afterEach(sinon.restore);

      it('Retorn um array', async () => {
        const req = {}
        const res = {}
        const products = await productsControllers.getAllProducts(req,);
        expect(products).to.be.an('array')
      });

      it('Verifica se o primeiro elemento é um array vazio', async () => {
        const [products] = await productsControllers.getAllProducts();
        expect(products).to.be.an('array')
        expect(products).to.be.empty;
      });
    });

    describe('Quando existem produtos cadastrados', () => {
      beforeEach(() => {
        const result = [{ "id": 1, "name": "Martelo de Thor" }];
        sinon.stub(productsServices, 'getAllProducts').resolves(result)
      });

      afterEach(sinon.restore);

      it('Retorn um array', async () => {
        const products = await productsControllers.getAllProducts();
        expect(products).to.be.an('array')
      });

      it('Verifica se o primeiro elemento é um objeto', async () => {
        const [products] = await productsControllers.getAllProducts();
        expect(products).to.be.an('object')
        expect(products).to.not.be.empty;
      });
    })
  })
});