import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

const ProductDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const router = useRouter();

    const handleAddToCart = () => {
        addToCart(product, quantity);
        // Show a success message or notification here
        alert('Product added to cart!');
    };

    const handleBuyNow = () => {
        addToCart(product, quantity);
        router.push('/checkout');
    };

    return (
        <div className="product-detail">
            <div className="product-image">
                <Image src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p className="price">${product.price.toFixed(2)}</p>
                <p className="description">{product.description}</p>

                <div className="quantity-selector">
                    <button
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>

                <div className="action-buttons">
                    <button
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                    <button
                        className="buy-now-btn"
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;