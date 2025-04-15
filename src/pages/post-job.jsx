import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'

const schema = z.object({
  title: z.string().min(1, {message: "Title is reequest"}),
  description: z.string().min(1, {message: "Description is required"}),
  location: z.string().min(1, {message: "Select a location"}),
  company_id: z.string().min(1, {message: "Select or Add a new Company"}),
  requirements: z.string().min(1, {message: "Requirements are required"}),
});

const PostJob = () => {
  const {register, control, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      location: "",
      company_id: "",
      requirements: "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <div className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
      <h1>Post a Jon</h1>
    </div>
  )
}

export default PostJob