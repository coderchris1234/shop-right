const SearchDrop =()=>{
    return(
        <div style={{
            width: "80%",
            height: "5vh",
            // padding: "10px",
            // backgroundColor: "red",
        }}>
            <input 
            type="text"
             placeholder="Search for Items..."
             style={{
                width: "100%",
               paddingTop: "10px",
               paddingBottom: "10px",
               paddingLeft: "10px",
               borderTopRightRadius: "10px",
               borderBottomLeftRadius: "10px",
               outline:"none",
               border: "1px solid lightGrey",
               backgroundColor: "rgba(211, 211, 211, 0.4)",
               backdropFilter: "blur(10px)"
             }}
            />
        </div>
    )
}
export default SearchDrop;