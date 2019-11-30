import React from 'react';

import LayoutBlank from '../components/layout/LayoutBlank';
import Seo from '../components/layout/parts/Seo';


const NotFoundPage: React.FC = () => (
    <LayoutBlank>
        <Seo title="404: Not found"/>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </LayoutBlank>
);

export default NotFoundPage;
