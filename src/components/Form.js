import React, { useContext } from 'react';
import TryunfoContext from '../context/TryunfoContext';

function Form() {
  const {
    cardName,
    setCardName,
    cardDescription,
    setCardDescription,
    cardAttr1,
    setCardAttr1,
    cardAttr2,
    setCardAttr2,
    cardAttr3,
    setCardAttr3,
    cardImage,
    setCardImage,
    cardRare,
    setCardRare,
    cardTrunfo,
    setCardTrunfo,
    hasTrunfo,
    isSaveButtonDisabled,
    cards,
    setHasTrunfo,
    setCards,
    } = useContext(TryunfoContext);

    const alreadyHadTrunfo = () => {
      if (cardTrunfo && !hasTrunfo) setHasTrunfo(true);
    };
  
    const onSaveButtonClick = () => {
        setCards([...cards,
          { cardName: cardName,
            cardDescription: cardDescription,
            cardImage: cardImage,
            cardRare: cardRare,
            cardAttr1: cardAttr1,
            cardAttr2: cardAttr2,
            cardAttr3: cardAttr3,
            cardTrunfo: cardTrunfo,
          }]);
        // setCardName('');
        // setCardDescription('');
        // setCardImage('');
        // setCardRare('normal');
        // setCardAttr1('0');
        // setCardAttr2('0');
        // setCardAttr3('0');
        // setCardTrunfo(false);
      clearEverything();
      alreadyHadTrunfo();
    };

  const clearEverything = () => {
    setCardName('');
    setCardDescription('');
    setCardImage('');
    setCardRare('normal');
    setCardAttr1('0');
    setCardAttr2('0');
    setCardAttr3('0');
    setCardTrunfo(false);
  }

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
          onChange={ (e) => setCardName(e.target.value) }
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
          onChange={ (e) => setCardDescription(e.target.value) }
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
          onChange={ (e) => setCardAttr1(e.target.value) }
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
          onChange={ (e) => setCardAttr2(e.target.value) }
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
          onChange={ (e) => setCardAttr3(e.target.value) }
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
          onChange={ (e) => setCardImage(e.target.value) }
        />
      </label>
      <label htmlFor="rare">
        Raridade
        <select
          data-testid="rare-input"
          id="rare"
          name="cardRare"
          value={ cardRare }
          onChange={ (e) => setCardRare(e.target.value) }
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
              onChange={ () => setCardTrunfo(!cardTrunfo) }
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

export default Form;
