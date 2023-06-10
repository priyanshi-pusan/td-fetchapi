
fetch("https://jsonplaceholder.typicode.com/posts").then(res=>{return res.json()
})
.then(data=>{  
    for (let item of data) {
               document.getElementById('card-container').innerHTML += 
`  <div class="card">
  <h2>${item.title}</h2>
  <p>${item.body}</p>
  </div>
  `;  
    }
})
.catch(error=>console.log(error));
