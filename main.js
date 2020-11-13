let button = document.querySelector("#submit");

button.addEventListener("click", () => {
  let eilutes = document.querySelector("#eilutes").value;
  let stulpeliai = document.querySelector("#stulpeliai").value;
  let error = document.querySelector("p");
  if (eilutes && stulpeliai) {
    error.innerText = "";
    if (!isNaN(eilutes) && !isNaN(stulpeliai)) {
      error.innerText = "";

      let theader = "<table class='table table-dark my-5'>\n";
      let tbody = "";

      for (let i = 0; i < eilutes; i++) {
        tbody += "<tr>";

        for (let j = 0; j < stulpeliai; j++) {
          tbody += "<td>";
          tbody += "Stulpelis";
          tbody += "</td>";
        }
        tbody += "</tr>\n";
      }
      let tfooter = "</table>";
      document.getElementById("wrapper").innerHTML = theader + tbody + tfooter;
      console.log(tbody);
    } else {
      error.innerText = "Given values is not a numbers";
    }
  } else {
    error.innerText = "Empty fields";
  }
});
