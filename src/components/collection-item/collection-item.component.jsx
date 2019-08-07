import React from 'react';

import Item from '../item/item.component';

import './collection-item.styles.scss';

const CollectionItem = ({ title, items }) => (
    <div className="collection-item">
        <h1>{title}</h1>
        <div className="collection-items">
            {
                items.filter((item, index) => index < 4).map(item => (
                    <Item key={item.id} items={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionItem;