import 'bootstrap/dist/css/bootstrap.min.css';
import Formm from './Form';
import './App.css';
import Navv from './Navbar';
import Image1  from './zoro.jpg';
import Image2 from './sanji.jpg'

import Image  from './luffy.jpg';
function App() {
  return (
    <div>
    <Navv/>
    <h2>One Piece</h2>
    <div id="image">
      
      <div class="onepiece">
        <h3>Monkey D Luffy</h3>
    <img src={Image} alt="monkey d luffy"/>
    <p>Luffy is never one to give up. When he’s on a mission<br/>
     to save his brother Ace, only to find Ace’s<br/>
     cell empty, Ivankov tells him to throw in the towel.<br/>
      The quote is Luffy’s determined reply.<br/>
       The scene takes place in Episode 881.</p>
    </div>
    <div class="onepiece">
      <h3>Roronoa ZORO </h3>
    <img src={Image1} alt="zoro"/>
    <p>Roronoa Zoro, also known as "Pirate Hunter" Zoro,<br/>
     is the combatant of the Straw Hat Pirates,<br/> 
     and one of their two swordsmen.<br/>
      Formerly a bounty hunter, he is the second<br/>
       member of the crew and the <br/>
       first to join doing so in the Romance Dawn Arc</p>
    </div>
    <div class="onepiece">
      <h3>Vinsomk Sanji</h3>
    <img src={Image2} alt="sanji"/>
    <p>"Black Leg" Sanji, born as Vinsmoke Sanji,is the cook<br/>
     of the Straw Hat Pirates. He is the fifth member of the<br/>
      crew and the fourth to join, doing so at<br/>
       the end of the Baratie Arc.</p>
    </div>
    </div>
    

    <Formm/>
    
    </div>
  );
}

export default App;
