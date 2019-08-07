export const collectItemRedandant = (allItems, itemsToAdd) => {
    const existingItem = allItems.find(item => item.id == itemsToAdd.id);

    if (existingItem) {
        return allItems.map(item => (
            item.id == itemsToAdd.id ?
                { ...item, quantity: item.quantity + 1 } :
                item
        ))
    }
    return [...allItems, { ...itemsToAdd, quantity: 1 }]
}