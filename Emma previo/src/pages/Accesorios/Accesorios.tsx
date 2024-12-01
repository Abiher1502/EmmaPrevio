import { Catalog } from "../../components/Catalog/Catalog";

import {  catalogAccesorios } from "../../data/catalog";






export const AccesoriosPage = () => {
    return <>
        
        <Catalog productList={catalogAccesorios}/>
    </>
    
}

