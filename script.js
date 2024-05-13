const form = document.querySelector("form");
let data;
const userImage = document.querySelector(".userImage");
const username = document.querySelector(".username");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.querySelector("#user").value;

  const requestUrl = `https://api.github.com/users/${user}`;
  // console.log(requestUrl);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl);
  xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      data = JSON.parse(this.responseText);
      // // console.log(data);
      // console.log(data.avatar_url);
    //   console.log(data.name);
    //   console.log(data.followers);
      // console.log(data.following);
      userImage.innerHTML = `<img src='${data.avatar_url}'></img>`;
      username.innerHTML = `<span> Name : ${(
        data.name
      )} </span>`;
      followers.innerHTML = `<span> Follower : ${parseInt(
        data.followers
      )} </span>`;
      following.innerHTML = `<span> Following : ${parseInt(
        data.following
      )} </span>`;
    }
  };
  xhr.send();
});
