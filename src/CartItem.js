import React from 'react';

class CartItem extends React.Component {
    increaseQuantity = () =>{

        this.setState((prevState) =>{
          return {
            qty:prevState.qty+1
          }
        }, () =>{
          console.log('this.state',this.state)
        } )
    }

    decreaseQuantity = () =>{    
      const {qty} = this.state
      if(qty == 0){
        return ;
      }
      this.setState((prevState) =>{
        return {
          qty:prevState.qty-1
        }
      })
  }
   
  render () {
      const {title , price , qty , img } = this.props.product;
    return (
     
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img className = "action-icons" 
            alt ="increase" 
            src="https://www.flaticon.com/svg/vstatic/svg/748/748113.svg?token=exp=1612586967~hmac=68501722632156f477cc423f6ec74785" onClick = {this.increaseQuantity} />

            <img className = "action-icons"
             alt ="increase" 
             src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612586785~hmac=84f71d210e3a4e514e7488cbf88f8b9f" onClick = {this.decreaseQuantity} />

            <img className = "action-icons"
             alt ="increase"
              src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1612586995~hmac=291677528d93d2a169791dc09870cb8f"/>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 120,
    width: 120,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;