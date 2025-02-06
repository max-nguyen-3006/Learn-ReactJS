import { useState } from "react";
const gifts = ["CPU i9", "CPU i7", "CPU i5"];
const courses = [
  {
    id: 1,
    name: "ReactJS",
  },
  {
    id: 2,
    name: "JS",
  },
  {
    id: 3,
    name: "PHP",
  },
];
/* Two ways binding
 */
function App() {
  const [gift, setGift] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState();
  const [checkedCheckbox, setCheckedCheckbox] = useState([]);
  //todo list
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    console.log(storageJobs);    
    return storageJobs ?? [];
  });

  const handleGift = () => {
    if (gift) return;
    const index = Math.floor(Math.random() * gifts?.length);
    console.log(index);
    setGift(gifts[index]);
  };
  const handleSubmit = () => {
    console.log(name, email);
  };
  const handleCheckedCheckBox = (courseId) => {
    if (!checkedCheckbox.includes(courseId)) {
      setCheckedCheckbox([...checkedCheckbox, courseId]);
    } else {
      setCheckedCheckbox(checkedCheckbox.filter((id) => id !== courseId));
    }
  };
  //todo list
  const handleJobs = (job) => {
    if (!job) return;
    if (jobs.includes(job)) return;
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  const handleDeleteJob = (job) => {
    setJobs(jobs.filter((item) => item !== job));
    setJobs(() => {
      const newJobs = jobs.filter((item) => item !== job);
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
  };  return (
    <div className="App" style={{ padding: 20 }}>
      <h1> {gift || "Chưa có phần thưởng"}</h1>
      <button onClick={handleGift}>Lấy thưởng</button>
      <hr></hr>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <button onClick={handleSubmit}>Register</button>
      <hr></hr>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            id={course.id}
            onChange={() => setChecked(course.id)}
            checked={course.id === checked}
          />
          {course.name}
        </div>
      ))}
      <hr></hr>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            id={course.id}
            onChange={() => handleCheckedCheckBox(course.id)}
            checked={checkedCheckbox.includes(course.id)}
          />
          {course.name}
        </div>
      ))}
      <hr></hr>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={() => handleJobs(job)}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <div key={index} style={{ display: "flex" }}>
            <li>{job}</li>
            <button
              onClick={() => handleDeleteJob(job)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
