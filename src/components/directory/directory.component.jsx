import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DirectoryMenu from '../directory-menu/directory-menu.component';

import { selectDirectoryItems } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ directory }) => (
    <div className="directory">
        {
            directory.map(item => (
                <DirectoryMenu key={item.id} {...item} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    directory: selectDirectoryItems
})

export default connect(mapStateToProps)(Directory);