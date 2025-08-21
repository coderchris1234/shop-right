const ShowDrop =()=>{
    return(
        <div style={{
            width: "150%",
            height: "50vh",
             backgroundColor: "rgba(211, 211, 211, 0.4)",
            position: "absolute",
            top: '70px',
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            zIndex: "9999",
            backdropFilter: "blur(10px)"
        }}>
            <p>Shop Drop</p>
        </div>
    )
}
export default ShowDrop