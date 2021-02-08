import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
       constructor (){
        super();
        this.state = {
            products :[
                {
                  title:'Mobile Phone',
                  price:999,
                  qty:1,
                  img:'',
                  id:1
                },
                {
                  title:'Watch',
                  price:199,
                  qty:10,
                  img:'',
                  id:2
                },
                {
                  title:'Laptop',
                  price:99999,
                  qty:3,
                  img:'',
                  id:3
                }
            ]
        }
    }
    // increase quantity
    handleIncreaseQuantity = (product) =>{
      const { products } = this.state;
      const index = products.indexOf( product );
      products[index].qty+=1;
      this.setState ({
        products:products
      }    
      )
    }
    // decrease quantity
    handleDecreaseQuantity = (product) =>{
      console.log('Hey decraese quantity here..',product)
      const { products } = this.state;
      const index = products.indexOf(product);
      if(products[index].qty == 0){
        return
      }
      else{
        products[index].qty-=1;
      }
      this.setState({
        products
      })
    }
   render(){
       const {products} = this.state;
       return(
        <div className ="Cart">
           {products.map((product) =>{
              return <CartItem 
              product={product}
               key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}
              
                />
           })}
        </div>
       )     
   }
}

export default Cart;