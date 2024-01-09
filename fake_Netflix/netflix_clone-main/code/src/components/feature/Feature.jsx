import './Feature.css'
import f1 from '../images/feature-1.png'
import f2 from '../images/feature-2.png'
import f3 from '../images/feature-3.png'
import f4 from '../images/feature-4.png'
const Feature=()=>{
    return(
        <>
  <div class="features">
    <div class="row">
        <div class="text-col">
            <h2>Enjoy on your TV</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>

        </div>
        <div class="img-col">
            <img src={f1}/>
        </div>
    </div>
    <div class="row">
        <div class="img-col">
            <img src={f2}/>
        </div>
        <div class="text-col">
            <h2>Download your shows to watch offline</h2>
            <p>Save your favourites easily and always have something to watch.</p>

        </div>
    </div>
    <div class="row">
        <div class="text-col">
            <h2>Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

        </div>
        <div class="img-col">
            <img src={f3}/>
        </div>
    </div>
    <div class="row">
        <div class="img-col">
            <img src={f4}/>
        </div>
        <div class="text-col">
            <h2>Create profiles for kids</h2>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>

        </div>
    </div>
   </div>
        </>
    )
}
export default Feature;