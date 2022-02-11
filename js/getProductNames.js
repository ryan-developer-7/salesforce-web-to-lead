fetch('https://ryantesting123456-developer-edition.um6.force.com/services/apexrest/ActiveProductNames')
    .then(response => response.json())
    .then(data => {

    let ddlItems = document.getElementById("00N4K000002A1uc");

    for (let i = 0; i < data.length; i++) {
        let opt = data[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        ddlItems.appendChild(el);
    }
});