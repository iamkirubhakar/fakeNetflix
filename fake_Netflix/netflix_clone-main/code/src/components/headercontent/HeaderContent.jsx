import './HeaderContent.css'
import logo from '../images/logo.png'
import icon from '../images/down-icon.png'



const HeaderContent=()=>{
 

    return(
        <div class="header">
        <nav>
            <img src={logo} className="logo"/>
            <div class="icon">
                <button class="language" >English <img src={icon}/></button>
                <button >Sign In</button>
            </div>
        </nav>  
        <div class="header-content">
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form class="email-signup">
                <input type="email"placeholder="Email address" required/>
                <a href="http://localhost:5174/">GetStarted</a>
                
            </form>
        </div>
       </div>
    )
}
export default HeaderContent