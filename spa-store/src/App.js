import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <section className='spa-header'>
          <div>
            Logo
          </div>
          
          <nav>
            <ul className='list-group'>
              <li>
                Home
              </li>
              <li>
                Collection
              </li>
              <li>
                Products
              </li>
              <li>
                Other Pages
              </li>
              <li>
                Blog
              </li>
              
            </ul>  
          </nav>
          
          <div className='section-btns'>
            <button className='header-icon'>
              1
            </button>
            <button className='header-icon'>
              2
            </button>
            <button className='header-icon'>
              3
            </button>
            <button className='header-icon'>
              4
            </button>
          </div>
        </section>

      </header>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
