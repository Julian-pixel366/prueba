import React from "react";
import {data} from '../../data.js'
import './list-products.scss'

function ProductList  ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
})  {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		< >
		 <div className='container container-items  text-capitalize'>
    <div className='row'>
      {data.map(product => (
        <div className='col-md-4 mb-4 item' key={product.id}>
          <div className='card'>
            <img src={product.img} alt={product.nameProduct} className='card-img-top' />
            <div className='card-body info-product'>
              <h2 className='card-title'>{product.nameProduct}</h2>
              <p className='card-text price'>${product.price}</p>
              <button className='btn btn-primary' onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
		</>
	);
};

export default ProductList
   
{/* <div className='container-items '>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>${product.price}</p>
						<button  onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div> */}