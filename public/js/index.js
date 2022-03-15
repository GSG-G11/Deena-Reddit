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
      const desc = document.createElement('button');
      // vote.textContent = element.id;
      inc.addEventListener('click', () => {
        fetch(`/increaseVote/${element.id}`)
        .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // c += 1;
            // vote.textContent = c;
            // console.log(c);
          });
          // .then(() => console.log(element.vote));
      });
      desc.addEventListener('click', () => {
        // c -= 1;
        // vote.textContent = c;
        // console.log(c);
      });
      inc.setAttribute('class', 'inc');
      inc.textContent = 'inc';
      desc.textContent = 'desc';
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
      div.appendChild(desc);
      posts.appendChild(div);
    });
  })
  .catch((error) => console.log(error));
