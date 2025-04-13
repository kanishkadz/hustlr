import { getSingleJob } from '@/api/apiJobs';
import useFetch from '@/hooks/use-fetch';
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useParams } from 'react-router-dom';

const JobPage = () => {
  const {isLoaded, user} = useUser();
  const {id} = useParams();

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  return (
    <div>JobPage</div>
  )
}

export default JobPage