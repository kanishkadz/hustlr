import { getJobs } from '@/api/apiJobs'
import useFetch from '@/hooks/use-fetch'
import { useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const {isLoaded} = useUser()
  
  const {fn: fnJobs, data:dataJobs, loading:loadingJobs} = useFetch(getJobs, {location, company_id, searchQuery});

  console.log(dataJobs);

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded]);

  return (
    <div>

    </div>
  )
}

export default JobListing