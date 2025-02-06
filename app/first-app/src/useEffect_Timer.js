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
3. Cleanup function luoôn được gọi trước khi callback được gọi (trừ lần mounted)
*/
function Timer() {
  const [countdown, setCountdown] = useState(180);
  const [count, setCount] = useState(1);
  const [avatar, setAvatar] = useState();
  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       setCountdown((prev) => prev - 1);
  //     }, 1000);
  //     //cleanup function
  //     return () => clearInterval(timerId);
  //   }, []);

  useEffect(() => {
    console.log("Mounted or Re-render");

    //cleanup function
    return () => {
      console.log("Cleanup ...");
    };
  }, [count]);
  useEffect(() => {
    //cleanup function
    return () => {
      avatar && URL.revokeObjectURL(avatar?.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    const file = e?.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <h1>{countdown}</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>

      <hr></hr>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} style={{ width: "50%" }} />}
    </div>
  );
}
export default Timer;
