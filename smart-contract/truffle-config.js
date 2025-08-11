module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     
      port: 7545,            
      network_id: "*", 
      from:"0x87A6d66383401Eaa655dbb92750Dd7d80a545295",  
      gas: 6721975,         
      gasPrice: 20000000000, 
    },
  },
  
  
  compilers: {
    solc: {
      version: "0.8.20",
      settings: {          
        optimizer: {
          enabled: true,
          runs: 200
        },
        viaIR: true,       
        evmVersion: "byzantium"
      }
    }
  },

  
  db: {
    enabled: false,
  }
};