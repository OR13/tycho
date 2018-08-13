const Tycho = require('../src');

describe('Tycho', () => {
  it('constructor works', async () => {
    const producer = new Tycho.Producer();
    console.log(producer);
  });
});
