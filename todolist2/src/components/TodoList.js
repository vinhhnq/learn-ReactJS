import React, {useState} from 'react';

function TodoList() {
  const storageJob = JSON.parse(localStorage.getItem('job'))
  const [jobs, setJobs] = useState(storageJob ?? []);
  const [job, setJob] = useState('')

  const handleAddJob = () => {
    setJobs(prev => {
      if (job.trim() !== ''){
        const newJobs = [...prev, job];
        const jsonJob = JSON.stringify(newJobs)
        localStorage.setItem('job', jsonJob)
        return newJobs;
      } else {
        alert('please input tasks');
      }
    })
    setJob('')
  }

  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={e => setJob(e.target.value)}/>
      <button onClick={handleAddJob}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
