const loginForm = document.querySelector("#give-me-name");
const loginInput = document.querySelector("#give-me-name input");

const helloToUser = document.querySelector("#hello-to-user");
const helloToUserSpan = document.querySelector(
  "#hello-to-user span:first-child"
);
const refreshName = document.querySelector("#hello-to-user span:last-child");

function handleNameBtn(event) {
  loginForm.classList.add("hidden");
  const userName = loginInput.value;
  localStorage.setItem("username", userName);
  paintGreetings(userName);
}

function deleteName() {
  localStorage.removeItem("username");
  location.reload();
  /*화면
  새로
  고침*/
}

refreshName.addEventListener("click", deleteName);

/*       main에서만 구현 ==이름을 물어보고 이름을 입력하면 form이 사라지고 인사가 나오게(인강처럼)        */

function paintGreetings(name) {
  helloToUserSpan.innerText = `${name}님, 안녕하세요 :)`;
  helloToUser.classList.remove("hidden");
  loginInput.classList.add("hidden");
}

const localStorageUserName = localStorage.getItem("username");

if (localStorageUserName === null) {
  helloToUserSpan.classList.add("hidden");
  refreshName.classList.add("hidden");

  loginForm.addEventListener("submit", handleNameBtn);
  loginForm.classList.remove("hidden");
} else {
  paintGreetings(localStorageUserName);
}
