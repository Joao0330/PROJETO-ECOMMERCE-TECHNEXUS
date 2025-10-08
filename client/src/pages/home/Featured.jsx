// import components
import { useMemo } from 'react';
import ProductCard from '../../components/ProductCard';
import { useStates } from '../../context/useStates';

const Featured = () => {
	// Puts all products in an array
	const { allProducts } = useStates();

	// Selects 8 random products
	const featuredProducts = useMemo(() => {
		if (!allProducts || allProducts.length === 0) return [];
		// copy before sort to avoid mutation
		return [...allProducts].sort(() => Math.random() - 0.5).slice(0, 8);
	}, [allProducts]);

	return (
		<section className='featured'>
			<div className='container'>
				<div className='featured__wrapper'>
					<div className='featured__title'>
						<h2>Featured Products</h2>
						<p>Explore some of TechNexus latest products available in our store.</p>
					</div>

					<div className='featured__content'>
						{featuredProducts.map(product => (
							<ProductCard key={product.id} image={product.image} title={product.name} category={product.category} price={product.price.toFixed(2)} productId={product.id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
