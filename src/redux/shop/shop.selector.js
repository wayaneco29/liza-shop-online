import { createSelector } from 'reselect';

const selectShop = state => state.collections

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectSpecificCollection = specificItemName =>
    createSelector(
        [selectShopCollection],
        collections => collections[specificItemName]
    )

export const selectShopCollectionToArray = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
)