import { useState, useEffect } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/shared/header/header';

import ProductList from '../components/products/list-products';


function Products() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);


    useEffect(() => {
        if(allProducts.length) {
            localStorage.setItem('productsBuy', allProducts);
        }
    }, [allProducts])
	return (
    
		<>
			
       
			
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
				
			/>
			<div className='container'>
				<div className='row'>
			<div className='product s-flex'>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			</div>
			</div>
			</div>
		</>
	);
}
export default Products


