function connectToMetMask() {
    ethereum.enable().then(result => {
        accounts = result[0];
        console.log(result);
    })
}


$(document).ready(function () {
    if (typeof web3 !== 'undefined') {
        web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
        console.log(web3)
        document.getElementById("metamaskstatus").innerHTML= "CONNECTED";
    } else {
        // set the provider you want from Web3.providers
       // window.web3 = new Web3("http://localhost:8545");
       document.getElementById("metamaskstatus").innerHTML= "Please Install Metamask";
    }

    const contractAddress = "0x429Cc9EF4915c06faD8614de10dcd613E584DA9E";
    const contractAbi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newreg",
                    "type": "address"
                }
            ],
            "name": "addRegistrar",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "certificateDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "bridegroomName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "bridegroomFM",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "bridegroomNid",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "brideName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "brideFM",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "brideNid",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "mariageDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "witnessedBy",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "registrarName",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_certificateID",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_bridegroomName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_bridegroomFM",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_bridegroomNid",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_brideName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_brideFM",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_brideNid",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_mariageDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_witnessedBy",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_registrarName",
                    "type": "string"
                }
            ],
            "name": "newCertificate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_certificateID",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_bridegroomName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_bridegroomFM",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_bridegroomNid",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_brideName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_brideFM",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_brideNid",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_mariageDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_witnessedBy",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_registrarName",
                    "type": "string"
                }
            ],
            "name": "newCertificate2",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "viewregistrar",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    myContract = new web3.eth.Contract(contractAbi, contractAddress);
    console.log(myContract);
})
