import { Project } from '@/types/Project';
import {createClient,groq} from 'next-sanity'
import config from './config/client-config'

export async function getProjects(): Promise<Project[]>{
    // const client = createClient({
    //     projectId: "suzdzk6c",
    //     dataset: "production",
    //     apiVersion: "2023-05-06",
    // });

    return createClient(config).fetch(
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

export async function getProject(slug: string): Promise<Project> {

    // const client = createClient({
    //     projectId: "suzdzk6c",
    //     dataset: "production",
    //     apiVersion: "2023-05-06",
    // });
     

    return createClient(config).fetch(
        groq`*[_type=="project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`,
        {slug}
    )
}