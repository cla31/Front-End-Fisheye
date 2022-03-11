function testFetch() {
    fetch("./data/photographers.json")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {

            return console.log(value);
        })
        .catch(function(err) {
            // Une erreur est survenue
            console.log("Pb vec fetch");
        });
}

console.log(testFetch());