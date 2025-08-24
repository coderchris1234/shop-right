import { useEffect, useState } from 'react'
import Product from './Product'
import './ProductListStyle.css'

function App() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCatgory] = useState('')
  const [num, setnumber] = useState(10)

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('https://fakestoreapi.in/api/products/category')
      const data = await res.json();
      if (data.status === 'SUCCESS') {
        setCategories(data.categories)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://fakestoreapi.in/api/products?limit=${num}`)
      const data = await res.json()
      if (data.status === 'SUCCESS') {
        setProducts(data.products)
        setFilteredProducts(data.products)
      }

    }
    fetchProducts()
  }, [num])

  useEffect(() => {
    if(selectedCategory === ''){
      setFilteredProducts(products)
    } else if (selectedCategory === 'all') {
      setnumber(150)
      setFilteredProducts(products)
    } else {
      const filteredproducts = products.filter(product => product.category === selectedCategory)
      setFilteredProducts(filteredproducts)
    }
  }, [selectedCategory, products])

  const handleCategoryChange = (category) => {
    setSelectedCatgory(category)
  }

  return (
    <>
    <div className='app'>
      <div>
        <p className='app-intro-text'>Filter By Category</p>

        <span className='button_wrapper'>
          <button
            onClick={() => handleCategoryChange('all')}
          >
            All
          </button>
          {
            categories.map((item, index) => {
              return (
                <button key={index}
                  onClick={() => handleCategoryChange(item)}
                  className={selectedCategory === item ? 'active' : ''}
                >
                  {item}
                </button>
              )
            })
          }
        </span>
      </div>
    </div>  



      {/* <div className='product-list-wrapper'>

     
      {
        
        filteredProducts.map((products) => (
          <div key={products.id} className='Product_wrapper'>
            <Product product={products} />
          </div>
        ))
      }
      </div> */}
<div className='list'>
      {
        
        filteredProducts.map((products) => (
          <div key={products.id} className='Product_wrapper'>
            <Product product={products} />
          </div>
        ))
      }
</div>
  
</>
    
  )
}

export default App