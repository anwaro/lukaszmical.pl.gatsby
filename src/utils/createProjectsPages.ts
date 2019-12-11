import {resolve} from 'path';
import {Project, projects} from './projects';

interface PageInput {
    path: string;
    component: string;
    layout?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context?: any;
}

interface BoundActionCreators {
    createPage: (page: PageInput) => void;
    deletePage: (page: PageInput) => void;
    createRedirect: (
        opts: {
            fromPath: string;
            isPermanent?: boolean;
            redirectInBrowser?: boolean;
            toPath: string;
        }
    ) => void;
}

export type GatsbyCreatePages = (
    fns: { boundActionCreators: BoundActionCreators }
) => void

export const createPages: GatsbyCreatePages = ({boundActionCreators}) => {
    const {createPage} = boundActionCreators;

    Object.values(projects).forEach((project: Project) => {
        const {url} = project;
        createPage({
            path: `projects/${url}`,
            component: resolve(__dirname, '../components/Project.tsx'),
            context: {
                name: url,
            },
        });
    });
};
