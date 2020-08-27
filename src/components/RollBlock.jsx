import React from 'react'
import PropTypes from 'prop-types';

function RollBlock({ name, image, price, structure, content }) {
    return (
        <div className="roll-block">
            <img className="roll-block__image" src={image} alt="Roll" />
              <h4 className="roll-block__title">{name}</h4>
            <div className="roll-block__selector">
              <p>{content}</p>
            </div>
            <div className="roll-block__bottom">
              <div className="roll-block__price">
                  <div className="roll-block__weight">{structure.count} / {structure.weight}гр</div>
                <div>{price} ₽</div>
              </div>
              <div className="button button--outline button--add">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white" />
                </svg>
                <span>Добавить</span>
                <i>2</i>
              </div>
            </div>
          </div>
    )
}

RollBlock.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,

  structure: PropTypes.shape({
    count: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired
  }).isRequired
};

export default RollBlock
