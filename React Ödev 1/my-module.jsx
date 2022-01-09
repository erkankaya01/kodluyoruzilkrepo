async function getData(userid) {
   const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + userid);
   const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/" + userid);    

user.posts = [{...post}];
console.log(user);

};

export default getData;