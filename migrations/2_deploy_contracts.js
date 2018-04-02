var YourToken = artifacts.require("./YourToken.sol");
var SampleCrowdsale = artifacts.require("./SampleCrowdsale.sol");
module.exports = function(deployer, network, accounts) {
    deployer.deploy(YourToken).then(function(){   
        const openingTime = Date.now()/1000|0 + 120; 
        const closingTime = openingTime + (3600 * 1 * 1); // *1 hour *1 days 
        const ethRate = new web3.BigNumber(100);
        const wallet = accounts[0];
    deployer.deploy(SampleCrowdsale, openingTime, closingTime, ethRate, wallet, 100000000000000000000, YourToken.address, 200000000000000000000).then( async () => {
      const instance = await OurCrowdsale.deployed();
      const token = await instance.token.call();
      console.log('Token Address', token);
    });
  });

};
  