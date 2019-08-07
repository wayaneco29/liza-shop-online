import React from 'react';
import { withRouter } from 'react-router-dom';

import './directory-menu.styles.scss';

const DirectoryMenu = ({ title, linkUrl, imageUrl, size, history }) => (
    <div className={`${size} directory-menu`} onClick={() => history.push(`${linkUrl}`)}>
        <div className="directory-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="title-container" >
            <h2 className="directory-title">{title}</h2>
            <span className="sub-title">SHOP NOW</span>
        </div>
    </div >
)

export default withRouter(DirectoryMenu);