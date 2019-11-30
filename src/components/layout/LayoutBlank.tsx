import React from 'react';
import '../../styles/layout.scss';
import Seo, {SeoProps} from './parts/Seo';

interface LayoutBlankProps {
    seo?: SeoProps;
}

const LayoutBlank: React.FC<LayoutBlankProps> = (props) => {
    const {children, seo = {}} = props;

    return (
        <>
            <Seo {...seo}/>
            {children}
        </>
    );
};


export default LayoutBlank;
