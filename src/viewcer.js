window.onload = function () {
  document.getElementById("certificateID").innerHTML = localStorage.getItem("certificateID");
  document.getElementById("bridegroomName").innerHTML = localStorage.getItem("bridegroomName");
  document.getElementById("bridegroomFM").innerHTML = localStorage.getItem("bridegroomFM");
  document.getElementById("bridegroomNid").innerHTML = localStorage.getItem("bridegroomNid");
  document.getElementById("brideName").innerHTML = localStorage.getItem("brideName");
  document.getElementById("brideFM").innerHTML = localStorage.getItem("brideFM");
  document.getElementById("brideNid").innerHTML = localStorage.getItem("brideNid");
  document.getElementById("mariageDate").innerHTML = localStorage.getItem("mariageDate");
  document.getElementById("witnessedBy").innerHTML = localStorage.getItem("witnessedBy");
  document.getElementById("registrarName").innerHTML = localStorage.getItem("registrarName");
};