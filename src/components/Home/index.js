import './home.css';
import { BsMouse } from 'React-icon/bs';

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img">
          <div className="circle"> </div>
          <div className="circle"> </div>
          <div className="circle"> </div>
          <div className="circle"> </div>
          <div className="circle"> </div>
          <div className="circle"> </div>
          <div className="circle"> </div>
          <div className="circle"> </div>
        </div>

        <img src="{img}" alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
      </a>

      <h2>
        <span>About Me</span>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit
          amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur
          adip,Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor
          sit amet, consectetur adip
        </p>
      </h2>
    </div>
  );
}

const toggle = document.querySelector('.main-img');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

export default Home;
