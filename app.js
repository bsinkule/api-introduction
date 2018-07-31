const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'


// Write a function that fetches data for one blog post from the API

// fetch(baseUrl + '4')
//   .then(function(response){
//       return response.json()
//   })
//   .then(function(json){
//       console.log(json)
//   })
 
  function getBlogPosts(url) {
    fetch(url)
      .then(function(res){
      return res.json()
          })
      
      .then(function(data){
      console.log("Data", data)
      
      addBlogPosts(data)
      
      // var $posts = document.querySelector('.blog-posts')
      // var newH1 = document.createElement('h2')
      // newH1.innerText = data.title
      // $posts.appendChild(newH1)
        console.log(data[0].title)
  })
 
  }
  getBlogPosts(baseUrl)
  
  
  //getBlogPosts(baseUrl)
// Write a function that appends data from blog post to the page
  // Append to the section with class "posts"
  // title
  // body

// 


// Write a function that fetches data for the entire list of blog posts



// Write a function that appends data from all blog posts to the page
  // Append to the section with class "posts"
  // Take in an array of data as a parameter
  // Use a for loop
  // Create a list of items as the container for 
    // h3: title
    // p: body
  
function addBlogPosts(postsArray) {
  
  for (let i in postsArray) {
    
    var newLi = document.createElement('li')
    var newH2 = document.createElement('h2')
    var newP = document.createElement('p')
    
    newP.innerText = postsArray[i].body
    
    var titl = postsArray[i].title
    newH2.innerText = titl

    newLi.appendChild(newH2)
    newLi.appendChild(newP)
    console.log("LI - ", newLi)

    var post = document.querySelector('ul.posts')
    post.appendChild(newLi)
    
  }
}
