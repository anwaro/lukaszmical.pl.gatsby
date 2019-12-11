import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout/Layout';
import loadFiles, {blankLayout} from '../utils/projectLoader';
import '../styles/old-layout.css';
import LayoutBlank from '../components/layout/LayoutBlank';

interface ProjectProps {
    pathContext: { name: string };
}

const Project: React.FC<ProjectProps> = ({pathContext: {name}}) => {
    const {css, js} = loadFiles(name);
    const isBlank = blankLayout(name);
    const ProjectLayout = isBlank ? LayoutBlank : Layout;

    console.log(css, js);

    return (
        <ProjectLayout>
            <Helmet>
                {css.map(file => (
                    <link key={file} href={file} media="all" rel="stylesheet"/>
                ))}
                {js.map(file => (
                    <script key={file} src={file}/>
                ))}

            </Helmet>
            <div dangerouslySetInnerHTML={{__html: require(`../projects/${name}/index.html`)}}/>


        </ProjectLayout>
    );
};

export default Project;
