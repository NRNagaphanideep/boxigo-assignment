import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import InventoryCategory from '../InventoryCategory'
import './index.css'

const InventoryContent = prop => {
  const {
    inventoryItemDetails,
    checkingInventoryItem,
    isInventoryItemChecked,
    isChecked,
  } = prop
  console.log(isChecked)
  const {id, displayName, category} = inventoryItemDetails
  const inventoryDetailsItemCountArray = category.map(each => each.items.length)
  const itemsCount = inventoryDetailsItemCountArray.reduce((a, b) => a + b)
  const onClickDropDownIcon = () => checkingInventoryItem(id)

  const toDisplayFurnitureItems = (
    <ul className="inventory-description-list-container">
      {category.map(each => (
        <InventoryCategory itemsDetails={each} key={each.id} />
      ))}
    </ul>
  )

  return (
    <li className="inventory-item-details-list-item">
      <div className="inventory-item-container">
        <div className="inventory-item-name-container">
          <h1 className="inventory-item-heading">{displayName}</h1>
          <div className="itemsCountContainer">
            <p className="items-count">{itemsCount}</p>
          </div>
        </div>
        <button
          type="button"
          className="arrow-button"
          onClick={onClickDropDownIcon}
        >
          {isInventoryItemChecked && isChecked ? (
            <IoIosArrowUp />
          ) : (
            <IoIosArrowDown />
          )}
        </button>
      </div>
      {isInventoryItemChecked && isChecked ? toDisplayFurnitureItems : ''}
    </li>
  )
}

export default InventoryContent
