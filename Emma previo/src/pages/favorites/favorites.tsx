import { useContext } from "react";
import { ProductCardProps } from "../../components/ProductCard/ProductCard";
import { FavoritesContext } from "../../providers/FavoritesContex";
import { ShoppingCartContext } from "../../providers/ShoppingCartContext";
import { setToLocalStorage } from "../../utils/localStorage";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";
const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

const FavoritesPage = () => {
    const { favoritesList, setFavoritesList } = useContext(FavoritesContext);
    const { productList, setProductList } = useContext(ShoppingCartContext);

    const handleClick = (id: string) => {
        const result = favoritesList.filter((product: ProductCardProps) => product.id !== id);
        setFavoritesList(result);
        setToLocalStorage(FAVORITES_LIST_KEY, result);
    };

    const addToCart = (product: ProductCardProps) => {
        const productIndex = productList.findIndex((p: { id: string; }) => p.id === product.id);
        if (productIndex === -1) {
            setProductList([...productList, { ...product, quantity: 1 }]);
        } else {
            productList[productIndex].quantity += 1;
            setProductList([...productList]);
        }
        setToLocalStorage(PRODUCT_LIST_KEY, productList);

        toast.info("Producto añadido al carrito");

    };
 
        

    return (
        <div>
            <h1>Favoritos</h1>
            {favoritesList.map((product: ProductCardProps) => (
                <div className="shopping-cart-page-product" key={product.id}>
                    <div className="shopping-cart-page-product-image">
                        <img src={product.imagesUrl[0]} alt="" />
                    </div>
                    <div className="shopping-cart-page-product-desc">
                        <div>{product.description}</div>
                    </div>
                    <div className="shopping-cart-page-product-price">
                        ${product.price}
                    </div>
                    <Button 
                        type="button"
                        onClick={() => handleClick(product.id)}
                        label="Eliminar"
                        className="dark"
                    />
                    <Button 
                        type="button"
                        onClick={() => addToCart(product)}
                        label="Añadir al carrito"
                        className="dark"
                    />
                </div>
            ))}

<ToastContainer />
            
        </div>
    );
}



export { FavoritesPage };