async function getUser(){

    
    user_name= document.getElementById("serch").value

    try{
        let response = await fetch(`https://api.github.com/users/${user_name}`);

        if (response.ok){
            let data = await response.json();
            console.log(data)
            return data
        }
        else{
          throw new Error("No se encontro el usuario")  
        }     
    }
    catch(error){
        console.log(error)
        alert("Hmm... Hubo un error con el usuario ingresado.")
        return null
    }
}

let button = document.getElementById("button")
button.addEventListener("click",async ()=>{
    userData = await getUser()

    if(userData){
        document.getElementById("main").innerHTML=`
        <h2> ${userData.login} </h2>
        <img src=${userData.avatar_url} alt="User image">
        <h3> Followers: ${userData.followers} </h3>
        <h3><a href="${userData.html_url}"> Follow User</a>
        `
    }
})



