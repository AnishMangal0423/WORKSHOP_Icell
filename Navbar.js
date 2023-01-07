import logo from "./esummit_logo.png";
// import l1 from "./Line 1.png";
// import l2 from "./Line 2.png";
function Navbar(){

    return(

      <div id="nav-cont">

         <img src={logo} />
        
        <div id="nav-lines">
        {/* <img src={l1} className="line"/>
         <img src={l2} className="line"/> */}
        
        </div>

        <div id="nav-line2"></div>
      </div>

    )

}

export default Navbar;