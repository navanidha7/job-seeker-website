import React from 'react';

const JobDetails = ({ job }) => {
    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div className="job-details">
            <h1>{job.title}</h1>
            <h2>{job.company}</h2>
            <p>{job.description}</p>
            <h3>Requirements:</h3>
            <ul>
                {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                ))}
            </ul>
            <h3>Location:</h3>
            <p>{job.location}</p>
            <button onClick={() => applyForJob(job.id)}>Apply Now</button>
        </div>
    );
};

const applyForJob = (jobId) => {
    // Logic to apply for the job
    console.log(`Applying for job with ID: ${jobId}`);
};

export default JobDetails;