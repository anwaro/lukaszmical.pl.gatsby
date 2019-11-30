import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout/Layout';

const IndexPage: React.FC = () => (
    <Layout seo={{title: 'Homepage'}}>
        <Link to="/projects/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
