import { getJobs } from '@/api/apiJobs'
import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const JobListing = () => {
  
  const fetchJobs = async () => {
    
    const data = await getJobs(supabaseAccessToken);
  };

  useEffect(() => {
    fetchJobs();

    getJobs();
  }, []);

  return (
    <div>

    </div>
  )
}

export default JobListing