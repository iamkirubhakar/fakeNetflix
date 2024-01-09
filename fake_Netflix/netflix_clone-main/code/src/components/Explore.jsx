import './Explore.css'
import w from './images/Wed.jpeg'
import b from './images/Blood.jpeg'
import c from './images/Celebrity.jpeg'
import s from './images/She.jpeg'
import g from './images/Squid.jpeg'
import h from './images/Haunt.jpeg'
import k from './images/Keladei.jpeg'
import l from './images/Love.jpeg'
import m from './images/Sand.jpeg'
import f from './images/Fakeprofile.jpeg'
import br from './images/Barbarians.jpeg'
import Sf from './images/SpaceForce.jpeg'
import logo from './images/logo.png'

const Explore =()=>{
    return(
        <>
        <div className="navbar">
        <img src={logo} className="logo"/>
       
        </div>
        <h1>Watch In One Weekend</h1>
        <p>Popular On Netflix</p>
        <div className="explore">
        <div className="content">
       <a href="https://www.netflix.com/in/title/81231974" target='_blank' rel="noreferrer">
       <img src={w}  />
       </a>
       <a href="https://www.netflix.com/in/title/81444051" target='_blank' rel="noreferrer">
       <img src={b}  />
       </a>
       <a href="https://www.netflix.com/in/title/81361096" target='_blank' rel="noreferrer">
       <img src={c}  />
       </a>
       <a href="https://www.netflix.com/in/title/81021929" target='_blank' rel="noreferrer">
       <img src={Sf}  />
       </a>
    
       </div>
       <p>Crtically Acclaimed TV Shows</p>
       <div className="content">
      
       <a href="https://www.netflix.com/in/title/81040344" target='_blank' rel="noreferrer">
      <img src={g}  />
      </a>
      <a href="https://www.netflix.com/in/title/80189221" target='_blank' rel="noreferrer">
      <img src={h}  />
      </a>
      <a href="https://www.netflix.com/in/title/81354739" target='_blank' rel="noreferrer">
      <img src={l}  />
      </a>
      <a href="https://www.netflix.com/in/title/80992058" target='_blank' rel="noreferrer">
      <img src={k}  />
      </a>
      </div>
      <p>New Releases</p>
      <div className="content">
      <a href="https://www.netflix.com/in/title/81150303" target='_blank' rel="noreferrer">
      <img src={m}  />
      </a>
      <a href="https://www.netflix.com/in/title/81304948" target='_blank' rel="noreferrer">
      <img src={f}  />
      </a>
      <a href="https://www.netflix.com/in/title/81024039" target='_blank' rel="noreferrer">
      <img src={br}  />
      </a>
      <a href="https://www.netflix.com/in/title/81021929" target='_blank' rel="noreferrer">
      <img src={s}  />
      </a>
      </div>


        </div>
    

       
        </>
    )
}
export default Explore;