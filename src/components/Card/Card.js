import './Card.css'

const Card = () => {
  return (
    <div className='card text-white bg-primary mb-3 myCard'>
      <div className='card-header'>Header</div>
      <div className='card-body'>
        <h5 className='card-title'>Primary card title</h5>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}

export default Card