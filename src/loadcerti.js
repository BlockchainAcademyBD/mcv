function getCertificateDetails() {
        certificateID = document.getElementById("certificateID").value;
        myContract.methods.certificateDetails(certificateID)
          .call({ from: ethereum.selectedAddress })
          .then((result) => {
            console.log(result);
            localStorage.setItem("certificateID", certificateID);
            localStorage.setItem("bridegroomName", result.bridegroomName);
            localStorage.setItem("bridegroomFM", result.bridegroomFM);
            localStorage.setItem("bridegroomNid", result.bridegroomNid);
            localStorage.setItem("brideName", result.brideName);
            localStorage.setItem("brideFM", result.brideFM);
            localStorage.setItem("brideNid", result.brideNid);
            localStorage.setItem("mariageDate", result.mariageDate);
            localStorage.setItem("witnessedBy", result.witnessedBy);
            localStorage.setItem("registrarName", result.registrarName);
  
            var url = "certificate.html";
            window.location.href = url;
          })
      }