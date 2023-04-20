import './index.css'

const InventoryCategory = prop => {
  const {itemsDetails} = prop
  const {displayName, items} = itemsDetails

  const getSelectedType = type => {
    const randomNumber = Math.ceil(Math.random() * type.length)
    return type.length > 0 ? (
      <p className="option">{type[randomNumber - 1].option}</p>
    ) : (
      ' '
    )
  }
  return (
    <li className="inventory-description-list-item">
      <h1 className="furniture">{displayName}</h1>
      {items.map(each => (
        <div className="quantity-container">
          <div>
            <p className="furniture-name">{each.displayName}</p>
            {each.meta.hasType ? getSelectedType(each.type) : ' '}
          </div>
          <p className="quantity">{each.qty}</p>
        </div>
      ))}
    </li>
  )
}

export default InventoryCategory
