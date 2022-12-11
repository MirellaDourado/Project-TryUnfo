import React, { useState } from 'react';
import PropTypes from 'prop-types'

function CardDemonstration( { card } ) {
  const [isToggle, setIsToggle] = useState(false);


  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <button
      onClick={ handleToggle }
      type="button"
      className={ isToggle ? 'active' : 'notactive' }
    >
      <div className="subback">
        <div className="namePhoto">
          <h3
            data-testid="name-card"
          >
            { card.cardName || 'Insira um nome' }

          </h3>
          <img
            src={ card.cardImage }
            alt={ card.cardName }
            data-testid="image-card"
          />

        </div>
        <p
          data-testid="description-card"
        >
          { card.cardDescription }
        </p>
        <div className="division">
          <p>Velocidade:</p>
          <p
            data-testid="attr1-card"
          >
            {' '}
            <span className="partTwo">{ card.cardAttr1 }</span>
          </p>
        </div>
        <div className="division">
          <p>Bombas:</p>
          <p
            data-testid="attr2-card"
          >
            <span className="partTwo">{ card.cardAttr2 }</span>
          </p>
        </div>
        <div className="division">
          <p>Força:</p>
          <p
            data-testid="attr3-card"
          >
            <span className="partTwo">{ card.cardAttr3 }</span>
          </p>
        </div>
        <div className="division">
          <p>Raridade:</p>
          <p
            data-testid="rare-card"
          >
            <span className="partTwo">{ card.cardRare }</span>
          </p>
        </div>
      </div>
      { card.cardTrunfo === true ? (
        <p data-testid="trunfo-card" id="trunfo">
          {' '}
          Super Trunfo
          {' '}
          <i className="fa fa-bomb" />
        </p>)
        : <p id="empty" />}
    </button>
  );
}

CardDemonstration.propTypes = {
  card: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })
};

export default CardDemonstration;