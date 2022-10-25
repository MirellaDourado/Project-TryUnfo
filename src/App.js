import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      filterName: '',
      filterTrunfo: false,
      rareFilter: 'todas',
      isToggle: false,
    };
  }

  validation = () => {
    this.setState((prev) => ({
      cardName: prev.cardName,
      cardDescription: prev.cardDescription,
      cardImage: prev.cardImage,
      cardAttr1: prev.cardAttr1,
      cardAttr2: prev.cardAttr2,
      cardAttr3: prev.cardAttr3,
    }));
    const text1 = cardName.value.length !== 0;
    const text2 = description.value.length !== 0;
    const text3 = img.value.length !== 0;
    let a = false;
    let b = false;
    let result = true;
    const max = 90;
    const min = 0;
    const maxSum = 210;
    const firstAttr = first.value <= max && first.value >= min;
    const secondAttr = second.value <= max && second.value >= min;
    const thirdAttr = third.value <= max && third.value >= min;
    const sum = Number(+first.value)
    + Number(+second.value)
    + Number(+third.value) <= maxSum;
    if (text1 && text2 && text3) a = true;
    if (firstAttr && secondAttr && thirdAttr) b = true;
    if (a && b && sum) result = false;
    this.setState({
      isSaveButtonDisabled: result,
    });
  };

  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const changed = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: changed,
    });
    this.validation();
  };

  alreadyHadTrunfo = () => {
    const { cardTrunfo, hasTrunfo } = this.state;
    if (cardTrunfo && !hasTrunfo) this.setState({ hasTrunfo: true });
  };

  onSaveButtonClick = () => {
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
      cards: [...prev.cards,
        { cardName: prev.cardName,
          cardDescription: prev.cardDescription,
          cardImage: prev.cardImage,
          cardRare: prev.cardRare,
          cardAttr1: prev.cardAttr1,
          cardAttr2: prev.cardAttr2,
          cardAttr3: prev.cardAttr3,
          cardTrunfo: prev.cardTrunfo,
        }],
    }));
    this.alreadyHadTrunfo();
  };

  deleteCard = (card) => {
    const { cards } = this.state;
    const cardRemoved = cards.filter((cardRem) => cardRem.cardName !== card.cardName
    && cardRem.cardDescription !== card.cardAttr1
    && cardRem.cardDescription !== card.cardRare);
    if (card.cardTrunfo === true) this.setState({ hasTrunfo: false });
    this.setState({ cards: [...cardRemoved] });
  };

  handleFilter = (event) => {
    const { value, type, checked } = event.target;
    if (type === 'text') this.setState({ filterName: value });
    if (type === 'checkbox') this.setState({ filterTrunfo: checked });
    if (event.target.id === 'rare-filter') this.setState({ rareFilter: value });
  };

  filtered = () => {
    const { filterName, filterTrunfo, rareFilter, cards } = this.state;
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

  handleToggle = () => {
    const { isToggle } = this.state;
    this.setState({
      isToggle: !isToggle,
    });
  };

  render() {
    const {
      filterName, filterTrunfo, rareFilter,
    } = this.state;
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
              <Form
                { ...this.state }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
              />
            </fieldset>
            <Card
              { ...this.state }
              handleToggle={ this.handleToggle }
            />
          </div>
          <div id="search">
            <input
              type="text"
              data-testid="name-filter"
              value={ filterName }
              onChange={ this.handleFilter }
              disabled={ filterTrunfo }
            />
            <select
              data-testid="rare-filter"
              id="rare-filter"
              name="cardRare"
              value={ rareFilter }
              onChange={ this.handleFilter }
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
                onClick={ this.handleFilter }
              />
            </label>
          </div>
          <div id="deck">
            { this.filtered().map((card, index) => (
              <div
                key={ index }
              >
                <Card
                  cardName={ card.cardName }
                  cardImage={ card.cardImage }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.deleteCard(card) }
                >
                  Excluir
                </button>
              </div>))}
          </div>
        </main>
      </>
    );
  }
}

export default App;
