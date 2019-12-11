import {default as data} from './projectsData.json';

export interface Project {
    url: string;
    name: string;
    description: string;
    css: string [];
    js: string[];
    date: string;
    blank: boolean;
}

export interface Projects {
    [key: string]: Project;
}

export const projects: Projects = data;
