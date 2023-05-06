import { Project } from '@/types/project';
import {createClient,groq} from 'next-sanity'

export async function getProjects(): Promise<Project[]>{
    const client = createClient({
        projectId: "suzdzk6c",
        dataset: "production",
        apiVersion: "2023-05-06",
    });

    return client.fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`
    )
}