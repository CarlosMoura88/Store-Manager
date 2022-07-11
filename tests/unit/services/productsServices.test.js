const productsServices = require('../../../services/productsServices')
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const productsModels = require('../../../models/productsModels');
const throwNotFoundError = require('../../../services/utils');

use(chaiAsPromised);

describe('Testa as funções da pasta services', () => {
  beforeEach(sinon.restore);
  describe('@getAllProducts', () => {

    it('Quando o banco de dados não conecta', () => {
      sinon.stub(productsModels, 'getAllProducts').rejects()
      expect(productsServices.getAllProducts()).to.be.eventually.rejected
    });

    it('Retorna os produtos', () => {
      sinon.stub(productsModels, 'getAllProducts').resolves([{}])
      expect(productsServices.getAllProducts()).to.eventually.deep.equal([{}])
    });
  });

  describe('@getProductById', () => {
    it('Não conecta ao banco', () => {
      sinon.stub(productsModels, 'getProductById').rejects();
      expect(productsServices.getProductById(0)).to.be.eventually.rejected;
    });  

    it('Quando não retorna nenhum produto', () => {
      sinon.stub(productsModels, 'getProductById').resolves({});      
      expect(productsServices.getProductById(0)).to.be.eventually.undefined;
    });

    it('Retorna o produto', () => {
      sinon.stub(productsModels, 'getProductById').resolves({});
      expect(productsServices.getProductById(1)).to.be.eventually.deep.equal({});
    })
  });

  describe('@insertProduct', async () => {
    it('Erro na insertProductModel', () => {
      sinon.stub(productsModels, 'insertProduct').rejects();
      expect(productsServices.insertProduct({})).to.be.eventually.rejected;
    });   

    it('Erro na getProducById', async () => {
      sinon.stub(productsModels, 'insertProduct').resolves([{ id: 1 }]);
      sinon.stub(productsServices, 'getProductById').rejects()
      expect(productsServices.insertProduct({name: 'produto'})).to.be.eventually.rejected;
    });

    it('Erro na getProducById', async () => {
      sinon.stub(productsModels, 'insertProduct').resolves([{ id: 1 }]);
      sinon.stub(productsServices, 'getProductById').resolves(1)
      expect(productsServices.insertProduct({ name: 'produto' })).to.be.eventually.deep.equal({});
    });
  });  
});