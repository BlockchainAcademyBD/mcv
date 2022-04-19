function issueCertificate() {
    certificateID = document.getElementById("certificateID").value;
    bridegroomName = document.getElementById("bridegroomName").value;
    bridegroomFM = document.getElementById("bridegroomFM").value;
    bridegroomNid = document.getElementById("bridegroomNid").value;
    brideName = document.getElementById("brideName").value;
    brideFM = document.getElementById("brideFM").value;
    brideNid = document.getElementById("brideNid").value;
    mariageDate = document.getElementById("mariageDate").value;
    witnessedBy = document.getElementById("witnessedBy").value;
    registrarName = document.getElementById("registrarName").value;
    
    myContract.methods.newCertificate(certificateID, bridegroomName, bridegroomFM, bridegroomNid, brideName, brideFM, brideNid, mariageDate, witnessedBy, registrarName)
      .send({ from: ethereum.selectedAddress, gasLimit: "927000" }).then((txn) => {
        console.log(txn);
        alert("Certificate Issue with Number: " + certificateID);
        window.location.href = "http://localhost:3000";
      })
  }