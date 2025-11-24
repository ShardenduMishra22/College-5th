import { useState, useEffect } from 'react';

interface Job {
  id: number;
  title: string;
  by: string;
  time: number;
  url?: string;
}

export default function JobBoard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [visibleJobs, setVisibleJobs] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        'https://hacker-news.firebaseio.com/v0/jobstories.json'
      );
      const jobIds = await response.json();
      
      const jobPromises = jobIds.slice(0, 20).map((id: number) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(res => res.json())
      );
      
      const jobsData = await Promise.all(jobPromises);
      setJobs(jobsData);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setVisibleJobs(prev => prev + 6);
  };

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div className="job-board">
      <h1>Hacker News Jobs</h1>
      
      <div className="jobs-list">
        {jobs.slice(0, visibleJobs).map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className="job-meta">
              Posted by {job.by} | {new Date(job.time * 1000).toLocaleDateString()}
            </p>
            {job.url && (
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                View Job
              </a>
            )}
          </div>
        ))}
      </div>

      {visibleJobs < jobs.length && (
        <button onClick={loadMore} className="load-more">
          Load More
        </button>
      )}
    </div>
  );
}
