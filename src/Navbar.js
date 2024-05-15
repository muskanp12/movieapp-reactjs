import styles from './nav.module.css';

 function Navbar(props){
    const {cartCount} = props
        return(
            <>
            <div className={styles.Nav}>
                <div className={styles.Title}>Movie App</div>
                <div className={styles.CartIconContainer}>
                <img alt='cart' src='https://cdn-icons-png.flaticon.com/128/3643/3643914.png' className={styles.CartImg}/>         
                    <div className={styles.CartCount}>{cartCount}</div>

                </div>

            </div>
        
    

        
            </>

        )
    }   
export default Navbar

// const styles = {
    // nav:{
    //     width : "100%",
    //     height : 70,
    //     background : "#4267b2",
    //     display : "flex",
    //     justifyContent : "space-between",
    //     alignItems: "center",
    //     position: "relative"
    // },
    // title: {
        // fontSize : "26px",
        // fontWeight: 600,
        // textTransform : "uppercase",
        // marginLeft: 20,
        // color: "#fff",
    // },
    // cartContainer : {
    //     position : "relative",
    //     cursor: "pointer"
    // },
    // cartIcon: {
    //     height: 48,
    //     margicRight: 20,
    //     color:"white",
    // },
    // cartCount : {
    //     background: "orange",
    //     borderRadius: "50%",
    //     padding : "4px 8px",
    //     position: "absolute",
    //     right: 10,
    //     top: -5,
    //     fontSize: 12
    // }

// }