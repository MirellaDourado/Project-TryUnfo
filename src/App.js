import React, { useContext, useEffect, useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import TryunfoContext from './context/TryunfoContext';
import CardDemonstration from './components/CardDemonstration';

function App() {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cards,
    setHasTrunfo,
    setCards,
    setIsSaveButtonDisabled,
   } = useContext(TryunfoContext);
  const [filterName, setFilterName] = useState('');
  const [filterTrunfo, setFilterTrunfo] = useState(false);
  const [rareFilter, setRareFilter] = useState('todas');

  useEffect(() => {
    validation();
  }, [cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage])

  const validation = () => {
    const text1 = cardName.length !== 0;
    const text2 = cardDescription.length !== 0;
    const text3 = cardImage.length !== 0;
    let a = false;
    let b = false;
    let result = true;
    const max = 90;
    const min = 0;
    const maxSum = 210;
    const firstAttr = cardAttr1 <= max && cardAttr1 >= min;
    const secondAttr = cardAttr2 <= max && cardAttr2 >= min;
    const thirdAttr = cardAttr3 <= max && cardAttr3 >= min;
    const sum = Number(+cardAttr1)
    + Number(+cardAttr2)
    + Number(+cardAttr3) <= maxSum;
    if (text1 && text2 && text3) a = true;
    if (firstAttr && secondAttr && thirdAttr) b = true;
    if (a && b && sum) result = false;
    setIsSaveButtonDisabled(result)
  };

  const deleteCard = (card) => {
    const cardRemoved = cards.filter((cardRem) => cardRem.cardName !== card.cardName
    && cardRem.cardDescription !== card.cardAttr1
    && cardRem.cardDescription !== card.cardRare);
    if (card.cardTrunfo === true) setHasTrunfo(false);
    setCards([...cardRemoved]);
  };

  const handleFilter = (event) => {
    const { value, type, checked } = event.target;
    if (type === 'text') setFilterName(value);
    if (type === 'checkbox') setFilterTrunfo(checked);
    if (event.target.id === 'rare-filter') setRareFilter(value);
  };

  const filtered = () => {
    let filterCard = cards;
    if (filterName !== '') {
      filterCard = cards.filter((card) => card.cardName.includes(filterName));
    }
    if (filterTrunfo !== false) {
      filterCard = cards.filter((card) => card.cardTrunfo === true);
    }
    if (rareFilter !== 'todas') {
      filterCard = cards.filter((card) => card.cardRare === rareFilter);
    } if (rareFilter !== 'todas' && filterName !== '') {
      filterCard = cards
        .filter((card) => card.cardRare === rareFilter && card.cardName
          .includes(filterName));
    }
    return filterCard;
  };

  return (
    <>
      <header>
        <img
          src="http://gamersensato.com.br/wp-content/uploads/2017/01/super-bomberman-r-logo.png"
          alt="Super BomberMan"
          id="title"
        />
      </header>
      <main>
        <div id="preview">
          <fieldset>
            <legend>Construa sua carta</legend>
            <Form />
          </fieldset>
          <Card />
        </div>
        <div id="search">
          <input
            type="text"
            data-testid="name-filter"
            value={ filterName }
            onChange={ handleFilter }
            disabled={ filterTrunfo }
          />
          <select
            data-testid="rare-filter"
            id="rare-filter"
            name="cardRare"
            value={ rareFilter }
            onChange={ handleFilter }
            disabled={ filterTrunfo }
          >
            <option> todas </option>
            <option> normal </option>
            <option> raro </option>
            <option> muito raro </option>
          </select>
          <label htmlFor="filterTrunfo">
            Filtrar Super Trunfo
            <input
              id="filterTrunfo"
              type="checkbox"
              data-testid="trunfo-filter"
              value={ filterTrunfo }
              onClick={ handleFilter }
            />
          </label>
        </div>
        <div id="deck">
          { filtered().map((card, index) => (
            <div
              key={ index }
            >
              <CardDemonstration
                card={ card } />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => deleteCard(card) }
              >
                Excluir
              </button>
            </div>))}
        </div>
      </main>
    </>
  );
}

export default App;
