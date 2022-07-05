const productsControllers = require('../../../controllers/productsControllers');
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { afterEach } = require('mocha');

use(chaiAsPromised);


describe('Testa as funções da pasta controllers', () => {

  describe('@getAllProducts', () => {
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
      };
      await productsControllers.getAllProducts({}, res);
      expect(res.status.getCall(0).args[0]).to.equal(200);
      expect(res.json.getCall(0).args[0]).to.deep.equal(result);
    })
  })
});