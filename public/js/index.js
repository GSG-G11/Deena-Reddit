const posts = document.querySelector('.posts');

fetch('/api/v1/allPosts')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const div = document.createElement('div');
      const a = document.createElement('a');
      const userName = document.createElement('h2');
      const date = document.createElement('span');
      const title = document.createElement('h3');
      const post = document.createElement('p');
      const vote = document.createElement('p');
      const inc = document.createElement('button');
      const dec = document.createElement('button');

      inc.addEventListener('click', (e) => {
        e.preventDefault();
        fetch(`/increaseVote/${element.id}`)
          .then((res) => res.json())
          .then((value) => {
            vote.textContent = value.vote;
          }).catch((err) => console.log(err));
      });
      dec.addEventListener('click', (e) => {
        e.preventDefault();
        fetch(`/decreaseVote/${element.id}`)
          .then((res) => res.json())
          .then((value) => {
            vote.textContent = value.vote;
          }).catch((err) => console.log(err));
      });
      inc.setAttribute('class', 'inc');
      inc.textContent = 'inc';
      dec.textContent = 'dec';
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
      div.appendChild(inc);
      div.appendChild(vote);
      div.appendChild(dec);
      posts.appendChild(div);
    });
  })
  .catch((error) => console.log(error));
