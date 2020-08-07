import React, { Component } from 'react';
import './Home.css'
import ex from '../ex.jpg'

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Product</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan erat porta rutrum ornare. Curabitur vel magna justo. Vivamus rutrum dui tellus, placerat eleifend ligula commodo eget. Vestibulum placerat a nunc et commodo. Etiam pulvinar semper elit, ut porta ante maximus ut. Integer pulvinar vel massa a pulvinar. Proin eleifend lobortis ante, quis bibendum nulla sagittis nec. Aliquam scelerisque augue at tortor faucibus, quis tristique quam pharetra. Phasellus aliquet magna et risus sollicitudin, nec hendrerit magna egestas. Maecenas lacus lacus, varius et pellentesque non, lobortis vitae nibh. Maecenas at nunc dolor. Quisque ex orci, dictum sed placerat faucibus, efficitur quis turpis.

Mauris ut accumsan elit, et aliquet purus. Nunc pharetra, est feugiat tincidunt pharetra, purus justo maximus mauris, eget finibus massa nisi sed purus. Suspendisse quis arcu sodales, scelerisque purus et, placerat dolor. Cras ornare id nisl ac ullamcorper. Aenean condimentum blandit odio, quis blandit nulla vestibulum maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nulla facilisis, luctus ex in, pharetra ex.

Donec quis eros justo. Fusce ornare commodo lobortis. Pellentesque efficitur suscipit enim, vel eleifend eros posuere et. Nam est mi, tincidunt dictum posuere nec, finibus at nibh. Nulla id elit id massa tristique sollicitudin ac ut justo. Aenean rhoncus a est sed facilisis. Suspendisse scelerisque bibendum nulla sit amet pellentesque. Maecenas nec quam sed urna imperdiet imperdiet ut vel purus. Nulla id lectus luctus, vehicula lacus in, volutpat magna.

Vestibulum venenatis at eros vitae semper. 
                <img src={ex}/>
            </div>
        )
    }
}

export default Home;
