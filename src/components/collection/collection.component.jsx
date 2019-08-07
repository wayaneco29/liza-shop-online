import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectShopCollectionToArray } from '../../redux/shop/shop.selector';

import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss';

const Collection = ({ collections }) => (
    <div className="collection">
        {
            collections.map(collection => (
                <CollectionItem key={collection.id} {...collection} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionToArray
})

export default connect(mapStateToProps)(Collection);