import {defineConfig} from 'sanity';
import{deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';

export const config = defineConfig({
    projectId: "suzdzk6c",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-05-06",
    basePath:"/admin",
    plugins:[deskTool()],
    schema: {types: schemas}
})