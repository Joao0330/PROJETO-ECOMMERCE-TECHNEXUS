// import hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import styles
import './styles/main.scss';

// import toast tools
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CreateProduct from './components/product-editor/CreateProduct.jsx';
import DeleteProduct from './components/product-editor/DeleteProduct.jsx';
import UpdateProduct from './components/product-editor/UpdateProduct.jsx';
import NoProductFound from './components/search/NoProductFound.jsx';

// Import Pages
import Home from './pages/home/Home.jsx';
import ProductList from './pages/product-list/ProductList.jsx';
import ProductDetails from './pages/product-details/ProductDetails.jsx';
import Contact from './pages/contact/Contact.jsx';
import ShopCart from './pages/shop-cart/ShopCart.jsx';
import Wishlist from './pages/wishlist/Wishlist.jsx';
import ProductEditor from './pages/product-editor/ProductEditor.jsx';

const App = () => {
	return (
		<>
			<ToastContainer theme='dark' />
			<BrowserRouter>
				<header>
					<Navbar />
				</header>

				<main>
					<Routes>
						<Route index element={<Home />} />
						<Route path='/product-list' element={<ProductList />}>
							<Route path='/product-list/:category' element={<ProductList />} />
						</Route>
						<Route path='/product-details' element={<ProductDetails />}>
							<Route path=':id/:name' element={<ProductDetails />} />
						</Route>
						<Route path='/contact' element={<Contact />} />
						<Route path='/shop-cart' element={<ShopCart />} />
						<Route path='/wishlist' element={<Wishlist />} />
						<Route path='/product-editor' element={<ProductEditor />} />
						<Route path='/product-editor/create-product' element={<CreateProduct />} />
						<Route path='/product-editor/delete-product/:id' element={<DeleteProduct />} />
						<Route path='/product-editor/update-product/:id' element={<UpdateProduct />} />
						<Route path='/product-not-found' element={<NoProductFound />} />
					</Routes>
				</main>

				<footer>
					<Footer />
				</footer>
			</BrowserRouter>
		</>
	);
};

export default App;
