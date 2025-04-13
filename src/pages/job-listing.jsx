import { getJobs } from '@/api/apiJobs'
import useFetch from '@/hooks/use-fetch'
import React from 'react'

const JobListing = () => {
  const {fn: fnJobs, data:dataJobs, loading:loadingJobs} = useFetch(getJobs, {});

  return (
    <div>

    </div>
  )
}

export default JobListing