const form = document.querySelector('.addPost');
const titleInput = document.querySelector('#title');
const postInput = document.querySelector('#post');
const msg = document.querySelector('.msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/addPost', {
    method: 'POST',
    body: JSON.stringify({
      title: titleInput.value,
      post: postInput.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      msg.textContent = data.message;
    })
    .catch((error) => console.log(error));
});
