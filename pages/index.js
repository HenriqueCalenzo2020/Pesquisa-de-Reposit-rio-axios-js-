const inputElement = window.document.querySelector("input");
const buttonElement = window.document.querySelector("button");
const listElement = window.document.querySelector("ul");

const searchUserGitHub = async () => {
  if (!inputElement.value) return alert("Digite o usuário...");

  const url = "https://api.github.com/users/" + inputElement.value + "/repos";

  return await fetch(url)
    .then((response) => response.json())
    .then(responseSearch)
    .catch((error) => {
      console.log("error", error);
      console.log(`You have one error: ${error.response.status}`);
    });
};

const generateLiChild = (item) => {
  console.log("item", item);

  const li = window.document.createElement("li");

  listElement.appendChild(li);

  li.style.textAlign = "center";
  li.style.listStyle = "none";
  li.innerHTML = `${JSON.stringify(item.name)}`;
};

const responseSearch = async (result) => {
  console.log("result", result);

  listElement.style.margin = 0;
  listElement.style.padding = 0;

  result.forEach(generateLiChild);
  return 1;
};

buttonElement.addEventListener("click", searchUserGitHub);
