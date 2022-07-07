const productsServices = require('../../../services/productsServices')
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');

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

  describe('@getProductById', () => {
    it('Não conecta ao banco', () => {
      sinon.stub(productsServices, 'getProductById').rejects();
      expect(productsServices.getProductById(0)).to.be.eventually.rejected;
    });

    it('Quando não retorna nenhum produto', () => {
      sinon.stub(productsServices, 'getProductById').resolves([[]]);
      expect(productsServices.getProductById(0)).to.be.eventually.undefined;
    });

    it('Retorna o produto', () => {
      sinon.stub(productsServices, 'getProductById').resolves({});
      expect(productsServices.getProductById(1)).to.be.eventually.deep.equal({});
    })
  });

  describe('@insertProduct', () => { 
    it()
  })
});