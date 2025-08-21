import "./HeaderStyle.css"
const ProfileDrop=()=>{
    return(
        <div style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "Grey",
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            backgroundColor: "rgba(211, 211, 211, 0.4)",
            backdropFilter: "blur(10px)"
            // position: "absolute",
            // top:"80px",
            // right: "10px"
        }}>
            <div className="Profile_Card">
                <p>Login</p>
                <span>Or</span>
                <p>sign Up</p>
                <span>Connect with</span>
                <div className="profile_icons_drop">
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-facebook"></i>

                </div>
            </div>
        </div>
    )
}
export default ProfileDrop