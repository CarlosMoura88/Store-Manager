const salesServices = require('../../../services/salesServices')
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const salesModels = require('../../../models/salesModels');

use(chaiAsPromised);

describe('Testa as funções da pasta services', () => {
  beforeEach(sinon.restore);
  describe('@getAllsales', () => {

    it('Quando o banco de dados não conecta', () => {
      sinon.stub(salesModels, 'getAllSales').rejects()
      expect(salesServices.getAllSales()).to.be.eventually.rejected
    });

    it('Retorna os produtos', () => {
      sinon.stub(salesModels, 'getAllSales').resolves([{}])
      expect(salesServices.getAllSales()).to.eventually.deep.equal([{}])
    });
  });

  /* describe('@getProductById', () => {
    it('Não conecta ao banco', () => {
      sinon.stub(salesModels, 'getProductById').rejects();
      expect(salesServices.getProductById(0)).to.be.eventually.rejected;
    });

    it('Quando não retorna nenhum produto', () => {
      sinon.stub(salesModels, 'getProductById').resolves({});
      expect(salesServices.getProductById(0)).to.be.eventually.undefined;
    });

    it('Retorna o produto', () => {
      sinon.stub(salesModels, 'getProductById').resolves({});
      expect(salesServices.getProductById(1)).to.be.eventually.deep.equal({});
    })
  });

  describe('@insertProduct', async () => {
    it('Erro na insertProductModel', () => {
      sinon.stub(salesModels, 'insertProduct').rejects();
      expect(salesServices.insertProduct({})).to.be.eventually.rejected;
    });

    it('Erro na getProducById', async () => {
      sinon.stub(salesModels, 'insertProduct').resolves([{ id: 1 }]);
      sinon.stub(salesServices, 'getProductById').rejects()
      expect(salesServices.insertProduct({ name: 'produto' })).to.be.eventually.rejected;
    });

    it('Erro na getProducById', async () => {
      sinon.stub(salesModels, 'insertProduct').resolves([{ id: 1 }]);
      sinon.stub(salesServices, 'getProductById').resolves(1)
      expect(salesServices.insertProduct({ name: 'produto' })).to.be.eventually.deep.equal({});
    });
  }); */
});