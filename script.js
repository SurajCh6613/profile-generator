const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const user = document.querySelector('#user').value;
    const userImage = document.querySelector("userImage")
    const username = document.querySelector("username")
    const follower = document.querySelector("follower")
    const following = document.querySelector("following")

    const requestUrl = `https://api.github.com/users/${user}`;
    // console.log(requestUrl);

    let data;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState === 4){
            data = JSON.parse(this.responseText);
            // // console.log(data);
            // console.log(data.avatar_url);
            // console.log(data.name);
            // console.log(data.followers);
            // console.log(data.following);
        }
    }
    xhr.send();

    // follower.innerHTML = `<span> Follower : ${data.followers} </span>`;
})