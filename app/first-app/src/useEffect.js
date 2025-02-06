import { useEffect, useState } from "react";

/*UseEffect(callback, [deps])
- deps : sự phụ thuộc dữ liệu
1. useEffect(callback): 
    + Gọi callback mỗi khi component re-render
    + Goij callback sau khi component thêm element vào DOM (UI của component load xong thì sẽ gọi callback)
2. useEffect(callback, [])
    + Chỉ gọi callback 1 lần sau khi component mounted
3. useEffect(callback, [deps])
    + Callback sẽ được gọi lại mỗi khi deps thay đổi
-------------
1. Callback luôn được gọi sau khi component mounted


*/
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [topic, setTopic] = useState("posts");
  //Case 1
  //   useEffect(() => {
  //     console.log("Mounted");
  //     document.title = title;
  //   });
  //Case 2
  // Call Api
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPosts(data);
  //         console.log(data);
  //       });
  //   },[]);

  //Case 3
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${topic}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(topic);
      });
  }, [topic]);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {console.log("Render")}
      <button style={topic === 'posts' ? { backgroundColor: "green" } : {} } onClick={() => setTopic("posts")}>Posts</button>
      <button style={topic === 'comments' ? { backgroundColor: "green" } : {} }  onClick={() => setTopic("comments")}>Comments</button>
      <button style={topic === 'albums' ? { backgroundColor: "green" } : {} } onClick={() => setTopic("albums")}>Albums</button>

      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              {topic === "comments" ? post.name : post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Content;
