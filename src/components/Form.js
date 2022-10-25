import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            id="cardName"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            placeholder="Insira um nome"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            type="textarea"
            data-testid="description-input"
            id="description"
            name="cardDescription"
            maxLength="140"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="first">
          Velocidade
          <input
            type="number"
            min="1"
            max="90"
            id="first"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="second">
          Bombas
          <input
            type="number"
            min="1"
            max="90"
            id="second"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="third">
          Força
          <input
            type="number"
            min="1"
            max="90"
            id="third"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="img">
          Imagem
          <input
            type="text"
            id="img"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            id="rare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option> normal </option>
            <option> raro </option>
            <option> muito raro </option>
          </select>
        </label>
        { hasTrunfo === false
          ? (
            <label htmlFor="trunfo">
              Super Trunfo
              <input
                type="checkbox"
                id="trunfo"
                data-testid="trunfo-input"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              {' '}
            </label>
          )
          : <p> Você já tem um Super Trunfo em seu baralho </p>}

        <button
          data-testid="save-button"
          type="button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
