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
2. Cleanup function luôn được gọi trước khi component unmounted

*/
function DOMEvent() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [topic, setTopic] = useState("posts");
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  //Case 3
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${topic}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(topic);
      });
  }, [topic]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Unmounting.....");
    };
  }, []);
  //Width
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    //cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div>
      <h1>{width}</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {console.log("Render")}
      <button
        style={topic === "posts" ? { backgroundColor: "green" } : {}}
        onClick={() => setTopic("posts")}
      >
        Posts
      </button>
      <button
        style={topic === "comments" ? { backgroundColor: "green" } : {}}
        onClick={() => setTopic("comments")}
      >
        Comments
      </button>
      <button
        style={topic === "albums" ? { backgroundColor: "green" } : {}}
        onClick={() => setTopic("albums")}
      >
        Albums
      </button>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              {topic === "comments" ? post.name : post.title}
            </li>
          );
        })}
      </ul>
      {show && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}
    </div>
  );
}
export default DOMEvent;
