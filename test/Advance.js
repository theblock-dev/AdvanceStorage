const AdvanceStorage = artifacts.require('AdvanceStorage.sol');

contract('AdvanceStorage', () => {
    let contractInstance;

    beforeEach(async ()=> {
        contractInstance = await AdvanceStorage.deployed();
    })

    it('should add a number to ids array', async() => {
        await contractInstance.addNumber(22);
        const result = await contractInstance.getAtIndex(0);
        assert(result.toNumber() === 22);
    })

    it('should return all the array elements', async()=> {
        await contractInstance.addNumber(10);
        const rawIds = await contractInstance.getAll();
        const ids = rawIds.map(ids => ids.toNumber());
        assert.deepEqual(ids, [22,10]);
    })

    it('should return correct length of the array', async() => {
        const length = await contractInstance.getLength();
        console.log(length);
        assert(length.toNumber() === 2);
    })
})