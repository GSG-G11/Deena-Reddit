const posts = document.querySelector('.posts');
const id = window.location.pathname.split('/')[2];

const deletePost = (postId) => fetch(`/post/${postId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
});

fetch(`/api/v1/getAllPostsById/${id}`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const div = document.createElement('div');
      const a = document.createElement('a');
      const userName = document.createElement('h2');
      const date = document.createElement('span');
      const title = document.createElement('h3');
      const post = document.createElement('p');
      a.href = `/profile/${element.user_id}`;
      userName.textContent = element.name;
      date.textContent = element.date;
      title.textContent = element.title;
      post.textContent = element.post;
      a.appendChild(userName);
      div.appendChild(a);
      div.appendChild(date);
      div.appendChild(title);
      div.appendChild(post);
      fetch('/userData')
        .then((res) => res.json())
        .then((result) => {
          if (result.id === element.user_id) {
            const remove = document.createElement('button');
            remove.textContent = 'delete';
            div.appendChild(remove);
            remove.addEventListener('click', () => {
              deletePost(element.id)
                .then(() => {
                  window.location = `/profile/${element.user_id}`;
                });
            });
          }
        })
        .catch((error) => console.log(error));
      posts.appendChild(div);
    });
  })
  .catch((error) => console.log(error));
