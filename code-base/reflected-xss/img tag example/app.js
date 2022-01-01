const userMessages = [];

const userMessageForm = document.querySelector("form");
// list of the
const userMessagesList = document.querySelector("ul");
// render the image  and message on the message
function renderMessages() {
  let messageItems = "";
  for (const message of userMessages) {
    messageItems = `
      ${messageItems}
      <li class="message-item">
        <div class="message-image">
        <!-- by giving malicious code piece, we can run out js script  -->
        <img src="${message.image}"  alt="${message.text}">
        </div>
        <p>${message.text}</p>
      </li>
    `;
  }

  userMessagesList.innerHTML = messageItems;
}
// mimic the accessToken that is stored in the localStorage
function addLocalStorage() {
  localStorage.setItem("accessToken", "This is the access token");
}

// handle the submit of the form
function formSubmitHandler(event) {
  addLocalStorage();
  // prevent the form from redirecting
  event.preventDefault();
  //  get the message from input
  const userMessageInput = event.target.querySelector("textarea");
  // get the url of an image from input field
  const messageImageInput = event.target.querySelector("input");

  const userMessage = userMessageInput.value;
  const imageUrl = messageImageInput.value;

  if (!checkFields(userMessage, imageUrl)) {
    return;
  }
  // create an object to send the data that is obtained from input fields
  userMessages.push({
    text: userMessage,
    image: imageUrl,
  });
  cleanup(userMessageInput, messageImageInput);
  renderMessages();
}

// clean the input fields
function cleanup(userMessageInput, messageImageInput) {
  userMessageInput.value = "";
  messageImageInput.value = "";
}
// check if the input fields are empty
function checkFields(userMessage, imageUrl) {
  if (
    !userMessage ||
    !imageUrl ||
    userMessage.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert("Please insert a valid message and image.");
    return false;
  }
  return true;
}
// Add an submit listener to the form
userMessageForm.addEventListener("submit", formSubmitHandler);
