import './Menu.styles.scss';

const Menu = () => {
    return (
        <div className="navbar-menu">
            <div className="dropdown">
                <a href="/mujer" className="dropbtn">Mujer</a>
                <div className="dropdown-content">
                    <a href="/PREMIUM">PREMIUM</a>
                    <a href="/mujer/vestidos">Vestidos</a>
                    <a href="/mujer/Camisas">Camisas</a>
                    <a href="/mujer/Tops">Tops</a>
                    <a href="/mujer/Blazers">Blazers</a>
                    <a href="/mujer/Pantalones">Pantalones</a>
                    <a href="/mujer/Trajesdebaño">Trajes de baño</a>
                    <a href="/mujer/Ropadeportiva">Ropa Deportiva</a>
                    <a href="/mujer/DAZYSueter">DAZY Sueter</a>
                    <a href="/mujer/Conjuntos">Conjuntos</a>
                    <a href="/mujer/Curvy">Curvy</a>
                    <a href="/mujer/Zapatos">Zapatos</a>
                </div>
            </div>
        
            <div className="dropdown">
                <a href="/joyeria" className="dropbtn">Joyería</a>
                <div className="dropdown-content">
                    <a href="/joyeria/Aretes">Aretes</a>
                    <a href="/joyeria/Collares">Collares</a>
                    <a href="/joyeria/Pulceras">Pulseras</a>
                    <a href="/joyeria/Accesorios">Accesorios</a>
                </div>
            </div>
        
            <div className="dropdown">
                <a href="/hombre" className="dropbtn">Hombre</a>
                <div className="dropdown-content">
                    <a href="/Chamarras">Chamarras</a>
                    <a href="/Playeras">Playeras</a>
                  
                </div>
            </div>
        </div>
    );
}

export { Menu }; 