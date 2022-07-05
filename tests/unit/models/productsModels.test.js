const productsModels = require('../../../models/productsModels');
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const connection = require('../../../db/connection');
const { afterEach } = require('mocha');

use(chaiAsPromised);

describe('Testa as funções da pasta models', () => {
  
  describe('@getAllProducts', () => {

    describe('Quando não existem produtos cadastrados', () => {

      beforeEach(() => {
        const result = [[]];
        sinon.stub(connection, 'execute').resolves(result)
      });

      afterEach(sinon.restore);
  
      it('Retorn um array', async () => {
        const products = await productsModels.getAllProducts();
        expect(products).to.be.an('array')
      });

      it('Verifica se o primeiro elemento é um array vazio', async () => {
        const [products] = await productsModels.getAllProducts();
        expect(products).to.be.an('array')
        expect(products).to.be.empty;
      });
    });

    describe('Quando existem produtos cadastrados', () => {
      beforeEach(() => {
        const result = [{ "id": 1, "name": "Martelo de Thor" }];
        sinon.stub(connection, 'execute').resolves(result)
      });

      afterEach(sinon.restore);

      it('Retorn um array', async () => {
        const products = await productsModels.getAllProducts();
        expect(products).to.be.an('array')
      });

      it('Verifica se o primeiro elemento é um objeto', async () => {
        const [products] = await productsModels.getAllProducts();
        expect(products).to.be.an('object')
        expect(products).to.not.be.empty;
      });
    })
  })
});