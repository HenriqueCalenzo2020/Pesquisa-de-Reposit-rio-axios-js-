var user = window.document.querySelector("#user");
var button = window.document.querySelector("#button");
var list = window.document.querySelector("#ul");
 
const searchUserGitHub = async () => {

    if(!user.value)
        return alert("Typing username...");

    try {
        const result = await axios.get("https://api.github.com/users/" + user.value + "/repos");
        return responseSearch(result);
    }  catch(error)  {
        console.log(`You have one error: ${error.response.status}`);
    }
    return 1;
}

const responseSearch = async (result) =>
{
    list.style.margin = 0;
    list.style.padding = 0;
 
    result.data.forEach((item) => {

        const li = window.document.createElement("li");
        
        list.appendChild(li);
        
        li.style.textAlign = "center";
        li.style.listStyle = "none";
        li.innerHTML = `${JSON.stringify(item.name)}`; 
    }); 
    return 1;
}
 
button.addEventListener("click", searchUserGitHub);