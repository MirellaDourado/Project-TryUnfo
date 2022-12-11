import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TryunfoContext from './TryunfoContext';

function TryunfoProvider({ children }) {
  const [cardName, setCardName] = useState('');
  const [cardImage, setCardImage] = useState('')
  const [cardDescription, setCardDescription] = useState('')
  const [cardAttr1, setCardAttr1] = useState('0');
  const [cardAttr2, setCardAttr2] = useState('0');
  const [cardAttr3, setCardAttr3] = useState('0');
  const [cardRare, setCardRare] = useState('normal');
  const [cardTrunfo, setCardTrunfo] = useState(false);
  const [handleToggle, setHandleToggle] = useState();
  const [isToggle, setIsToggle] = useState();
  const [cards, setCards] = useState([]);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true)


  const value = useMemo(() => ({
    cardName, setCardName,
    cardImage, setCardImage,
    cardDescription, setCardDescription, 
    cardAttr1, setCardAttr1,
    cardAttr2, setCardAttr2,
    cardAttr3, setCardAttr3,
    cardRare, setCardRare,
    cardTrunfo, setCardTrunfo,
    handleToggle, setHandleToggle,
    isToggle, setIsToggle,
    cards, setCards,
    hasTrunfo, setHasTrunfo,
    isSaveButtonDisabled, setIsSaveButtonDisabled,
  }), [cardName,
    cardImage,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardRare,
    cardTrunfo,
    handleToggle,
    isToggle,
    cards,
    hasTrunfo,
    isSaveButtonDisabled,]);

  return (
    <TryunfoContext.Provider value={ value }>
      <div>
        { children }
      </div>
    </TryunfoContext.Provider>
  );
}
TryunfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TryunfoProvider;