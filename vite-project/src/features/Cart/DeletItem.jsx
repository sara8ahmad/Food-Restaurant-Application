import React from 'react'
import { useDispatch} from 'react-redux'
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';


const DeletItem = ({pizzaId}) => {

const dispatch = useDispatch();
    return (
    <Button onClick={()=> dispatch(deleteItem(pizzaId))}>Delet</Button>
  )
}

export default DeletItem