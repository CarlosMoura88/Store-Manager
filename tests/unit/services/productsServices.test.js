const productsModels = require('../../../models/productsModels');
const productsServices = require('../../../services/productsServices')
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { afterEach } = require('mocha');

use(chaiAsPromised);

describe('Testa as funções da pasta services', () => {
  beforeEach(sinon.restore);
  describe('@getAllProducts', () => {

    it('Quando o banco de dados não conecta', () => {
      sinon.stub(productsServices, 'getAllProducts').rejects()
      expect(productsServices.getAllProducts()).to.be.eventually.rejected
    });

    it('Retorna os produtos', () => {
      sinon.stub(productsServices, 'getAllProducts').resolves({})
      expect(productsServices.getAllProducts()).to.eventually.deep.equal({})
    });
  });
});