import React from 'react';
import Helmet from 'react-helmet';
import {withPrefix} from 'gatsby';

import Layout from '../components/layout/Layout';
import '../projects/math/js/math.new';


const ProjectsPage: React.FC = () => (
    <Layout>
        <Helmet>
            <script src={withPrefix('script.js')} type="text/javascript"/>
        </Helmet>
        <canvas id={'mathCanvas'}/>
        <div>math</div>
    </Layout>
);

export default ProjectsPage;
