// Write your code here.
import './index.css'

const Thumbnailitem = props => {
  const {thumbnail, updatedImagefetch, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnail

  const updatedImages = () => {
    updatedImagefetch(id)
  }
  const classActive = isActive ? 'thumbnailopacity' : ''

  return (
    <li className={`thumbnail ${classActive}`}>
      <button className="btn" onClick={updatedImages}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default Thumbnailitem
