import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Cart from '../Customer/Components/Cart/Cart'
import Navigation from '../Customer/Components/Navigation/Navigation'
import Footer from '../Customer/Components/Footer/Footer'
import OrderDetails from '../Customer/Components/Order/OrderDetails'
import Order from '../Customer/Components/Order/Order'
import Checkout from '../Customer/Components/Checkout/Checkout'
import ProductDetails from '../Customer/Components/ProductDetails/ProductDetails'
import Product from '../Customer/Components/Product/Product'

const CustomerRouter = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:lavelOne/:lavelTow/:lavelThre' element={<Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/account/order' element={<Order />}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouter