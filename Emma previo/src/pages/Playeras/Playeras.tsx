import { Catalog } from "../../components/Catalog/Catalog";

import {  catalogPlayeras } from "../../data/catalog";



const heroPlayerasPage = {

    imageUrl: 'https://emacrown1502.s3.us-east-2.amazonaws.com/imagenes%20emacrown/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS2VS4NWQJHW66XWE%2F20241103%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20241103T232504Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLWVhc3QtMiJHMEUCIQCj0MQ4ym3CfLELdkpBo5%2B35iJaxsPYOOpOcJnI%2BukU2AIgXmpfe%2BE2%2B3WSOhhtaYjunbuw4yIqjx%2Fw4qoMMJIVUhIq8QII4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxOTQ3MjI0MjYyNzIiDAPLS3DdYqUc%2BMhjICrFAkPvohkCuk4U%2FrwrJwW9HOskhn8TvO%2FQUu0D9EvGwcNZ7q3K61OW10vvcSkSKaaqfZmQy982K0V3gLpoYGlCh7N4HfMvYWaLcGDEzJeFGeE97Lye2U4bF5Mmnt0Nr3mw1DOyIgjH1FpoJnr08n%2BJp2aH6L64ZGW%2FB%2FC7jyi9PJk1bralZYHGKKhECZYyrjqqXzWnqbMlcRPOqw6l4dpR8g%2FGoND4sggalx%2F%2FJ4xN4R3HXwcYapCGZi4YImlUTG6N2SmypcN1nPuKlrnCIHdhhiAuP576SMLuBDQCo7PPZUUIeTtWQRf7jA5JYK7%2FkyzAELxrnRx06phoHRvQmPfVXGsGlyBwRf5n%2FxehXL8W0XBO0Soi%2BH4HGNr3noxIL03YiiRs762a452TgaC%2FrB5kjb490ZeQI5MT3MMMGgnmzd%2FTehkD3sEwpIqguQY6swIAQdgjnG3Kw8A8gPdVVMj5Y1b3cuB5%2F8Y4vEFjHrZxU%2FkOYa5JDEIai%2BSl2oAIDy09yucPML%2BYL8O31L17t7b%2FpT4KuKKB6Jgdr8U9IMw3iemxyPmfIIp1ARRVizLfQHEs1umPKYXEdEyTpLcL2vDGmkCjkfNot9rWd1ze9aqceJXBXSIkZclQQv6tgiPSJn3MaH%2FSur1zLGflbOx02hCCy9yC3%2BUuU4rPBqUsakOsupTdcDj27tHg1u0r9Iv2Qwz%2BBm%2Ff3n1lAOGXmG0B29QlI8WpzF%2FZi2tX0%2BsmssXNi9U0kUKSh%2F56GtaNEoqUrIlZ3SSOx%2BO%2FMWdbqgNTuDkcG%2FPay39TMHWdsiGW9y64WVv%2FLR9HvIPqYKVGbCr2%2Frr5xmNHJ5qggMwBFdfUzXRr330h&X-Amz-Signature=1fd85048fc60aac2615602f4eb8a0336f7f762be9e88810ae2142179d7d6ff10&X-Amz-SignedHeaders=host&response-content-disposition=inline',
    imageText: 'Vístete no para impresionar, sino para expresar.',
    headline: '',
    button: {
        href: '/',
      
    }
    
};

export const PlayerasPage = () => {
    return <>
        
        <Catalog productList={catalogPlayeras}/>
    </>
    
}

