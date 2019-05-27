import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
           <nav class="navbar navbar-default">
             <div class="container-fluid">
               <ul class="nav navbar-nav">
                 <li><Link to='/'>Landing</Link></li>
                 <li><Link to='/library'>Library</Link></li>
               </ul>
             </div>
           </nav>
           <header>
             <h1>Bloc Jams</h1>
           </header>
        <main>
           <Route exact path="/" component={Landing} />
           <Route path="/library" component={Library} />
           <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
