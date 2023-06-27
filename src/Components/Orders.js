import React, {useState, useContext, useEffect } from 'react'
import "./orders.css"
import { db } from '../firebase'
import { AppContext } from './AppContext';


function Orders({user}) {

    const { state } = useContext(AppContext);
    const { basket} = state;
    const [orders, setOrders] = useState([])

    useEffect(() =>{
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot =>(
                setOrders(snapshot.docs.map(doc =>({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }else{
            setOrders([])
        }
       
    }, [user])

  return (
    <div className='orders'>
        <h1>Your Orders</h1>
      
    </div>
  )
}

export default Orders
