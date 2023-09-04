
function getUsers(){

    console.log("pasando por getUsers")

    fetch('http://localhost:5000/users')
        .then(res =>  res.json())
        .then(data => {
            var users = document.getElementById('users');
            for( let i = 0; i < data.length; i++){
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.innerHTML = data[i].user_name;
                row.appendChild(name);
                
                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);
                users.appendChild(row);
            }
        })

}
getUsers();


let myForm = document.getElementById("form")

myForm.addEventListener("submit",function(e){
    e.preventDefault();

    let form = new FormData(myForm)

    fetch("http://localhost:5000/create/user", {method:"POST", body:form})
    .then(response=>response.json())
    .then(data=>{
        let users = document.getElementById("users");
        let row = document.createElement("tr");

        let name = document.createElement("td");
        name.innerHTML = data.user_name;
        row.appendChild(name);

        let email = document.createElement("td");
        email.innerHTML = data.email;
        row.appendChild(email);

        users.appendChild(row);
    })

    
    myForm.reset()

    console.log("Se entregaron los datos")

    
})

