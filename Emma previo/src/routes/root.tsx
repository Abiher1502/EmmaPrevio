import { createBrowserRouter, Navigate } from "react-router-dom";
import { MenPage } from "../pages/men/Men";

import { ProductPage } from "../pages/product/Product";
import { ShoppingCartPage } from "../pages/shopping-cart/ShoppingCart";
import { Checkout } from "../pages/checkout/checkout";
import { FavoritesPage } from "../pages/favorites/favorites";
import { WomenPage } from "../pages/women/women";
import { JoyeriaPage } from "../pages/joyeria/joyeria";
import { VestidosPage } from "../pages/vestidos/vestidos";
import { AretesPage } from "../pages/Aretes/Aretes";
import { PulcerasPage } from "../pages/Pulceras/Pulceras";
import { AccesoriosPage } from "../pages/Accesorios/Accesorios";
import { CollaresPage } from "../pages/Collares/Collares";
import { ChamarrasPage } from "../pages/Chamarras/Chamarras";
import { PlayerasPage } from "../pages/Playeras/Playeras";
import { PREMIUMPage } from "../pages/PREMIUM/PREMIUM";



const router = createBrowserRouter([
 
  {
    path: "PREMIUM",
    element: <PREMIUMPage />, 
  },

  {
    path: "hombre",
    element: <MenPage />,
  },
  {
    path: "Chamarras",
    element: < ChamarrasPage />, 
  },

  {
    path: "Playeras",
    element: <PlayerasPage/>, 
  },
  {
    path: "product/:productId",
    element: <ProductPage />,
  },
  {
    path: "shopping-cart",
    element: <ShoppingCartPage />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "favorites",
    element: <FavoritesPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
  {
    path: "mujer",
    element: <WomenPage />,
    children: [
      
      {
        path: "vestidos",
        element: <VestidosPage />, 
      },

      {
        path: "Camisas",
        element: <VestidosPage />, 
      },

      {
        path: "Tops",
        element: <VestidosPage />, 
      },

      {
        path: "Blazers",
        element: <VestidosPage />, 
      },

      {
        path: "Pantalones",
        element: <VestidosPage />, 
      },

      {
        path: "Trajesdebaño",
        element: <VestidosPage />, 
      },

      {
        path: "Ropadeportiva",
        element: <VestidosPage />, 
      },

      {
        path: "DAZYSueter",
        element: <VestidosPage />, 
      },

      {
        path: "Conjuntos",
        element: <VestidosPage />, 
      },

      {
        path: "Curvy",
        element: <VestidosPage />, 
      },

      {
        path: "Zapatos",
        element: <VestidosPage />, 
      },
    ]
  },
  {
    path: "joyeria",
    element: <JoyeriaPage />,
    children: [
      {
        path: "Aretes",
        element: <AretesPage />, 
      },

      {
        path: "Collares",
        element: <CollaresPage />, 
      },

      {
        path: "Pulceras",
        element: <PulcerasPage />, 
      },

      {
        path: "Accesorios",
        element: <AccesoriosPage />, 
      },
    ]
  },
]);

export { router };