import React from 'react';

class CartItem extends React.Component {
    constructor (){
        super();
        this.state = {
            title:'Mobile Phone',
            price:999,
            qty:1,
            img:'',
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
        //Explanation => instead of doing this we can direct create arrow function of increaseQuantity function  then no need of defined it in constuctore (that means bindings)
    }
    increaseQuantity = () =>{
        // console.log('Test !');
        // this.state.qty +=1;
        // setState form 1
        // this.setState({
        //   qty:this.state.qty+1
        // })
        // setState form 2 => use this if previous state is required
        this.setState((prevState) =>{
          return {
            qty:prevState.qty+1
          }
        })
        console.log('this.state',this.state);
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
      // this.setState((prevState) =>{
      //   if(prevState.qty >0){
      //     return {
      //       qty:prevState.qty-1
      //     }
      //   }
      //   else{
      //     return{
      //       qty:prevState.qty
      //     }          
      //   }    
      // })
      // console.log('this.state',this.state);
  }
   
  render () {
      const {title , price , qty , img } =this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{this.state.title}</div>
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