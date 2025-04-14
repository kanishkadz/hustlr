import supabaseClient from "@/utils/supabase";

export async function applyToJob(token, _, jobData){
    const supabase = await supabaseClient(token);

    const random = Math.floor(Math.random() * 90000);
    const fileName = `resume-${random}-${jobData.candidate_id}`;

    const {error:storageError} = await supabase.storage.from('resumes').upload(fileName, jobData.resume);

    if(storageError) {
        console.error("Error Uploading Resume:", error);
        return null;
    }

    const resume = `${supab}`

    const {data, error} = await supabase.from("companies").select("*");

    if(error) {
        console.error("Error Fetching Companies:", error);
        return null;
    }
    return data;    
}