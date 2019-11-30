import React from 'react'; 

import Footer from './parts/Footer';
import Menu from './parts/Menu';
import LayoutBlank from './LayoutBlank';
import {SeoProps} from './parts/Seo';

interface LayoutProps {
    seo?: SeoProps;
}


const Layout: React.FC<LayoutProps> = (props) => { 
    const {children, seo = {}} = props;

    return (
        <LayoutBlank seo={seo}>
            <Menu/>
            <main>{children}</main>
            <Footer/>
        </LayoutBlank>
    );
};


export default Layout;
