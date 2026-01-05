import '@/home.css';
import { Home1 } from "./home1";
import { Home2 } from "./home2";
import { Webinars } from "./webiners";
import { Headers } from './header/header';
export const Home=()=> {
  const cards = [
    { id: 1, title: 'Hello', subtitle: 'Sundile' },
    { id: 2, title: 'Hello', subtitle: 'Sundile' },
    { id: 3, title: 'Hello', subtitle: 'Sundile' },
    { id: 4, title: 'Hello', subtitle: 'Sundile' }
  ]
 
    return (
 <>
 <Headers/>
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            Revolutionize<br />
            STEM<br />
            Research
          </h1>
          <p className="hero-subtitle">
            Connecting global researchers to inspire<br />
            impactful collaborations
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-right">
            <div className="hero-right-track">
          {cards.map((card) => (
            <div key={card.id} className="hero-card">
              <div className="hero-card-icon"></div>
              <div className="hero-card-content">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
    
 <Home1/>
 <Home2/>
 <Webinars/>
    </>
   
  )
};