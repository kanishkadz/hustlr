import React from 'react'
import { z } from 'zod'

const schema = z.object({
  title: z.string().min(1, {message: "Title is reequest"}),
  description: z.string().min(1, {message: "Description is required"}),
  location: z.string().min(1, {message: "Select a location"}),
  company_id: z.string().min(1, {message: "Select or Add a new Company"}),
  requirements: z.string().min(1, {message: "Requirements are required"}),
});

const PostJob = () => {


  return (
    <div>PostJob</div>
  )
}

export default PostJob