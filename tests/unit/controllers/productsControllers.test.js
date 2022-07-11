/* const productsControllers = require('../../../controllers/productsControllers');
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const productsServices = require('../../../services/productsServices');

use(chaiAsPromised);


describe('Testa as funções da pasta controllers', () => {

  describe('@getAllProducts', () => {

    it('deve disparar um erro', () => {
      sinon.stub(productsServices, 'getAllProducts').rejects();
      expect(productsControllers.getAllProducts()).to.eventually.be.rejected;
    });

    it('Recebe todos os produtos', async () => {
      const result = [
        {
          "id": 1,
          "name": "Martelo de Thor"
        },
        {
          "id": 2,
          "name": "Traje de encolhimento"
        },
        {
          "id": 3,
          "name": "Escudo do Capitão América"
        }
      ];
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns(),
        sendStatus: sinon.stub().returns(),
      };
      sinon.stub(productsServices,'getAllProducts').resolves([{}])
      await productsControllers.getAllProducts({}, res);
      expect(res.status.getCall(0).args[0]).to.equal(200);
      expect(res.json.getCall(0).args[0]).to.deep.equal([{}]);
    });
  })
}); */