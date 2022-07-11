const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const productsModels = require('../../../models/productsModels');
const connection = require('../../../db/connection');

use(chaiAsPromised);

describe('Testa as funções da pasta models', () => {
  describe('@getAllProducts', () => {
    beforeEach(sinon.restore);

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
    beforeEach(sinon.restore);
    it('Quando o banco não é acessado', () => {
      sinon.stub(connection, 'execute').rejects();
      expect(productsModels.getProductById(0)).to.be.eventually.rejected;
    });

    it('Quando não retorna nenhum produto', () => {
      sinon.stub(connection, 'execute').resolves([[]]);
      expect(productsModels.getProductById(0)).to.be.eventually.undefined;
    });

    it('Quando retorna o produto', () => {
      sinon.stub(connection, 'execute').resolves([{}]);
      expect(productsModels.getProductById(1)).to.be.eventually.deep.equal({});
    });
  });

  describe('@insertProduct', () => {
    beforeEach(sinon.restore);
    it('Quanto o banco não é acessado', () => {
      sinon.stub(connection, 'execute').rejects();
      expect(productsModels.insertProduct({})).to.be.eventually.rejected;
    });

    it('Deve retornar o id inserido', async () => {
      sinon.stub(connection, 'execute').resolves([{}]);
      expect(productsModels.insertProduct({ name: 'produto' })).to.eventually.deep.equal([{}]);
    });
  });

  describe('@updateProduct', () => {
    beforeEach(sinon.restore);
    it('Quanto o banco não é acessado', () => {
      sinon.stub(connection, 'execute').rejects();
      expect(productsModels.updateProduct(1, 'produto')).to.be.eventually.rejected;
    });

    it('Quando dá certo', () => {
      sinon.stub(connection, 'execute').resolves([{}]);
      return expect(productsModels.updateProduct(1, 'produto')).to.eventually.be.undefined;
    });
  });
  describe('@deleteProduct', () => {
    beforeEach(sinon.restore);
    it('Quanto o banco não é acessado', () => {
      sinon.stub(connection, 'execute').rejects();
      return expect(productsModels.deleteProduct(1)).to.be.eventually.rejected;
    });

    it('Quando dá certo', () => {
      sinon.stub(connection, 'execute').resolves([{}]);
      return expect(productsModels.deleteProduct(1)).to.eventually.be.undefined;
    });
  })
});