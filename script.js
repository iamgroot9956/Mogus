// Get references to HTML elements
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatContainer = document.getElementById("chat-container");

// Add event listener to send button
sendButton.addEventListener("click", sendMessage);

// Function to send a message
function sendMessage() {
  const message = messageInput.value;

  // Clear the input field
  messageInput.value = "";

  // Create a new message element
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message");

  // Append the message to the chat container
  chatContainer.appendChild(messageElement);

  // Scroll to the bottom of the chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}