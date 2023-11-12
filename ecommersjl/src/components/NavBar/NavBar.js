import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
      <nav class="navbar justify-content-center">
            <h3>
                PlanetaNBA
            </h3>
            <div class="container-fluid justify-content-center"><button class="btn btn-outline-success me-2" type="button">Camisetas</button>
            <button class="btn btn-outline-success me-2" type="button">Pelotas</button>
            <button class="btn btn-outline-success me-2" type="button">FuncoPops</button>
            
            </div>
           <CartWidget />
        </nav>
       
        
    )
}


export default NavBar