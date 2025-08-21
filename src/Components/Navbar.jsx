const Navbar =()=>{
    return(
        <div style={{
            width: "30%",
            height: "30vh",
            backgroundColor: "lightGrey",
            position: "absolute",
            top: "70px",
            left: "0px",
            backgroundColor: "rgba(211, 211, 211, 0.4)",
            backdropFilter: "blur(6px)",
            marginTop: "10px"
        }}>
         <ul style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "yellow",
            paddingLeft: "5px",
            display: "flex",
            listStyle: "none",
            flexDirection: "column",
            justifyContent: "space-around",
            cursor: "pointer",
         }}>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Shop</li>
         </ul>
        </div>
    )
}
export default Navbar