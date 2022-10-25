import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      handleToggle,
      isToggle,
    } = this.props;
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
              { cardName || 'Insira um nome' }

            </h3>
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />

          </div>
          <p
            data-testid="description-card"
          >
            { cardDescription || 'Insira uma descrição'}
          </p>
          <div className="division">
            <p>Velocidade:</p>
            <p
              data-testid="attr1-card"
            >
              {' '}
              <span className="partTwo">{cardAttr1}</span>
            </p>
          </div>
          <div className="division">
            <p>Bombas:</p>
            <p
              data-testid="attr2-card"
            >
              <span className="partTwo">{cardAttr2}</span>
            </p>
          </div>
          <div className="division">
            <p>Força:</p>
            <p
              data-testid="attr3-card"
            >
              <span className="partTwo">{cardAttr3}</span>
            </p>
          </div>
          <div className="division">
            <p>Raridade:</p>
            <p
              data-testid="rare-card"
            >
              <span className="partTwo">{cardRare}</span>
            </p>
          </div>
        </div>
        { cardTrunfo === true ? (
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
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isToggle: PropTypes.bool.isRequired,
};

export default Card;
