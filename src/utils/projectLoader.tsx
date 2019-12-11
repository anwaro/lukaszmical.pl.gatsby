import {useStaticQuery, graphql} from 'gatsby';

import {Project, projects} from './projects';

export interface Resource {
    publicURL: string;
    relativePath: string;
}

export interface Assets {
    css: string[];
    js: string[];
}

const extractProjectData = (name: string): Project | undefined => {
    return projects.hasOwnProperty(name) ? projects[name] : undefined;
};

const filterResources = (requiredFiles: string[], resources: Resource[]): string[] => {
    let files: string[] = [];
    requiredFiles.forEach(file => {
        const resource = resources.find(recourse => recourse.relativePath === file);
        if (resource) {
            files = [...files, resource.publicURL];
        }
    });

    return files;
};

export const isJs = (name: Resource): boolean => {
    return /\.js/.test(name.publicURL);
};

const loadFiles = (name: string): Assets => {
    const data = extractProjectData(name);
    if (data) {
        const {allFile: {nodes}} = useStaticQuery(graphql`
        {
            allFile(filter: {ext: {in: [".css", ".js"]}}) {
                nodes {
                    publicURL
                    relativePath
                }
            }
        }
      `);
        const jsFiles = [
            ...(data.js.includes('myQuery.js') ? ['myQuery.js'] : []),
            ...data.js.map(file => `${name}/js/${file}`)
        ];
        console.log(data.js, jsFiles);
        return {
            css: filterResources(data.css.map(file => `${name}/css/${file}`), nodes),
            js: filterResources(jsFiles, nodes),
        };
    }
    return {css: [], js: []};
};


export const blankLayout = (name: string): boolean => {
    const data = extractProjectData(name);
    if (data) {
        return data.blank;
    }
    return false;
};


export default loadFiles;