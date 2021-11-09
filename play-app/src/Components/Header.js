import {GiTheaterCurtains} from "react-icons/gi";
import ReactModal from "react-modal";
import {useState} from "react";
import {Link} from "react-router-dom";
const Header = ()=>{
    //state used to determine whether the modal box should be displayed
    const [modalIsOpen, changeModel] = useState(false);
    //handler for opening and closing the modal box
    const handleModel=()=>{
        if(modalIsOpen)
            changeModel(false);
        else
            changeModel(true);
    }
    return(
      <div>
          <span><Link to="/HomeView"><GiTheaterCurtains/></Link></span>
          <button onClick={handleModel}>About</button>
          <ReactModal isOpen={modalIsOpen} ariaHideApp={true}>
              <p>Julianna and Justin</p>
              <p><a href="https://github.com/JuliannaG8/WebIII_Assign1">Github</a></p>
              <h5>Technologies/Third-party Sources:</h5>
              <ul>
                  {/*Add any other technologies or third-party code sources/inspiration here*/}
                  <li>React-icons</li>
                  <li>React-modal</li>
                  <li>React-loader-spinner</li>
                  <li>Lodash</li>
                  <li><a href="https://blog.logrocket.com/using-localstorage-react-hooks/">Local Storage logic inspiration</a></li>
              </ul>
              <button onClick={handleModel}>Close</button>
          </ReactModal>
      </div>
    );
}
export default Header;
