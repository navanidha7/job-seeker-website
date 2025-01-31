import React from 'react';
import JobList from '../components/JobList';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Job Seeker Website</h1>
            <p>Your one-stop solution for finding the best job opportunities.</p>
            <h2>Featured Jobs</h2>
            <JobList />
        </div>
    );
};

export default Home;