import React from 'react';
import { connect } from 'react-redux';

import { selectSpecificCollection } from '../../redux/shop/shop.selector';
import Item from '../../components/item/item.component';

import './collection.styles.scss';

const CollectionPage = ({ filteredItems: { title, items } }) => (
    <div className="collection-page">
        <h1 className="cllection-title">{title}</h1>
        {
            items.map(item => (
                <Item key={item.id} items={item} />
            ))
        }
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    filteredItems: selectSpecificCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);