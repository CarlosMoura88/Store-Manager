const salesControllers = require('../../../controllers/salesControllers');
const sinon = require('sinon');
const { use, expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const salesServices = require('../../../services/salesServices');

use(chaiAsPromised);

const allSales = [
  {
    "saleId": 1,
    "productId": 1,
    "quantity": 5,
    "date": "2022-07-12T02:02:35.000Z"
  },
  {
    "saleId": 1,
    "productId": 2,
    "quantity": 10,
    "date": "2022-07-12T02:02:35.000Z"
  },
  {
    "saleId": 2,
    "productId": 3,
    "quantity": 15,
    "date": "2022-07-12T02:02:35.000Z"
  }
]

describe('Testa salesControllers', () => {
  beforeEach(sinon.restore);
  describe('@getAllSales', () => {
    it('retorna um erro', () => {
      sinon.stub(salesServices, 'getAllSales').rejects();
      expect(salesControllers.getAllSales({}, {})).to.be.eventually.rejected;
    });

    it('retornas todas as vendas', async () => {
      const res = {
        status: sinon.stub().callsFake(() => res),
        json: sinon.stub().returns(),
      };
      sinon.stub(salesServices, 'getAllSales').resolves(allSales);
      await salesControllers.getAllSales({}, res);
      expect(res.status.getCall(0).args[0]).to.equal(200);
      expect(res.json.getCall(0).args[0]).to.deep.equal(allSales);
    });
  });
});