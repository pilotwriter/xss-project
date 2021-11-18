const userMessages = {};

const userMessageForm = document.querySelector("form");
const userMessagesList = document.querySelector("ul");

function renderMessages(message) {
  const messageItem = `
   
      <li class="message-item">
       ${message}
      </li>
    `;

  userMessagesList.innerHTML = messageItem;
}

function formSubmitHandler(event) {
  event.preventDefault();
  const userMessageInput = event.target.querySelector("textarea");
  const messageImageInput = event.target.querySelector("input");
  const userMessage = userMessageInput.value;
  const imageUrl = messageImageInput.value;

  if (
    !userMessage ||
    !imageUrl ||
    userMessage.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert("Please insert a valid message and image.");
    return;
  }
  userMessages.text = userMessage;
  userMessages.imageUrl = imageUrl;

  userMessageInput.value = "";
  messageImageInput.value = "";
  makeRequest(userMessages);
  // renderMessages();
}
async function makeRequest(userMessages) {
  postData("http://localhost:8000/", userMessages).then((data) => {
    renderMessages(data);
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.text(); // parses JSON response into native JavaScript objects
}

userMessageForm.addEventListener("submit", formSubmitHandler);
