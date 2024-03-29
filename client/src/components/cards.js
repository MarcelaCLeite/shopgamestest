import React from 'react';
import './card.css';
import FormDialog from './dialog/dialog';

export default function Cards(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    < >
    <FormDialog 
    open={open}
    setOpen={setOpen} 
    name={props.name} 
    cost={props.cost} 
    category={props.category}
    listCard={props.listCard}
    setListCard={props.setListCard}
    id={props.id}
    />
    <div className='card--container' onClick={() => handleClickCard()}>
    <h3 className='card--title'>{props.name}</h3>
    <p className='card--category'>Categoria: {props.category}</p>
    <p className='card--cost'>R$ {props.cost},00</p>
  </div>
  </>
  );
};