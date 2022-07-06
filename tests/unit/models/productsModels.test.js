const productsModels = require('../../../models/productsModels');
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const connection = require('../../../db/connection');

use(chaiAsPromised);

describe('Testa as funções da pasta models', () => {
  
  beforeEach(sinon.restore);

  describe('@getAllProducts', () => {

    it('Quando o banco não conectar', () => {
      sinon.stub(connection, 'execute').rejects();
      expect(productsModels.getAllProducts()).to.eventually.be.rejected;
    });

    it('Retorna uma lista vazia', () => {
      sinon.stub(connection, 'execute').resolves([[]]);
      expect(productsModels.getAllProducts()).to.eventually.be.undefined;
    });

    it('Retorna todos os produtos', () => {
      sinon.stub(connection, 'execute').resolves([[{}]]);
      expect(productsModels.getAllProducts()).to.eventually.deep.equal({});
    });
  });

  describe('@getProductById', () => {
    it('Quando o banco não é acessado', () => {
      sinon.stub(productsModels, 'getProductById').rejects();
      expect(productsModels.getProductById(0)).to.be.eventually.rejected;
    });

    it('Quando não retorna nenhum produto', () => {
      sinon.stub(productsModels, 'getProductById').resolves([[]]);
      expect(productsModels.getProductById(0)).to.be.eventually.undefined;
    });

    it('Quando retorna o produto', () => {
      sinon.stub(productsModels, 'getProductById').resolves([[{}]]);
      expect(productsModels.getProductById(1)).to.be.eventually.deep.equal({});
    });
  });

  describe('@insertProduct', () => { 
    it('Quanto o banco não é acessado', () => {
      sinon.stub(productsModels, 'insertProduct').rejects();
      expect(productsModels.insertProduct({})).to.be.eventually.rejected;
    });

    it('Deve retornar o id inserido', async () => {
      sinon.stub(productsModels, 'insertProduct').resolves({ id: 1 });
      expect(productsModels.insertProduct({})).to.be.eventually.equal(1);
    })
  })   
});