import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function FormDialog(props) {

  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category
  });

  const handleEdit = () => {
    console.log(editValues.id)
    axios.put('http://localhost:3001/edit' , {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      category: editValues.category
    });
    handleClose();
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/delete/${editValues.id}`)
    handleClose();
  };
  
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = value => {
    setEditValues(prevValues => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  };

  return (

    <div className="pointA">
      <Dialog 
      open={props.open} 
      onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Jogo"
            defaultValue={props.name}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="Preço"
            defaultValue={props.cost}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            defaultValue={props.category}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Voltar</Button>
          <Button onClick={handleDelete}>Excluir</Button>
          <Button onClick={handleEdit}>Salvar</Button>
        </DialogActions>
      </Dialog>
      </div>

  );
} 
