function AddPost(subject, content) {
    const postContainer = document.getElementById("postsContainer");
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h3>${subject}</h3><p>${content}</p>`;
    postContainer.appendChild(postElement);
}

const postButton = document.getElementById("postButton");
const subjectInput = document.getElementById("subject");
const contentInput = document.getElementById("content");

postButton.addEventListener("click", () => {
    const subject = subjectInput.value;
    const content = contentInput.value;
    AddPost(subject, content);
    // Clear the input fields after posting
    subjectInput.value = "";
    contentInput.value = "";
});