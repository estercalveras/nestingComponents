import './app.css';


const Navigation = () => {
  return (
    <nav >
      <ul className='flex gap-4'>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className='flex justify-between items-center px-6 py-3'>
      <h1 className='mainTitle roboto-bold text-2xl'>Website name here</h1>
      <Navigation />
    </header>
  );
};

const Hero = () => {
  return (
    <section id="hero">
      <h2 className="text-4xl">This is my hero section</h2>
      <p>In here there will be a pretty bg picture and some text that briefly explains what the website is about!</p>
    </section>
  );
};
const Services = () => {
  return (
    <section id="services">
      <h2>This is my Services section</h2>
      <ul>
        <li>
          Service 1
        </li>
        <li>
          Service 2
        </li>
        <li>
          Service 3
        </li>
      </ul>
    </section>
  );
};
const Footer = () => {
  return (
    <footer id="footer">
      <p>Copyrighted 23rd nov 2024</p>
    </footer>
  );
};



const App = () => {
  return <div>
    <div className='h-screen'>
      <Header />
      <Hero className='h-full' />
    </div>
    <Services />
    <Footer />
  </div>;
};

export default App;
