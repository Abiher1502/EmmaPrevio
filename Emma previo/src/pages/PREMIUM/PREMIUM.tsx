import { Catalog } from "../../components/Catalog/Catalog";

import {  catalogPREMIUM } from "../../data/catalog";



const heroPREMIUMPage = {

    
    headline: '',
    button: {
        href: '/',
      
    }
    
};

export const PREMIUMPage = () => {
    return <>
       
        <Catalog productList={catalogPREMIUM}/>
    </>
    
}

