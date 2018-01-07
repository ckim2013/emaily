// If a given file is exporting a class, or a react component of any type,
// be it a functional or class component, we will label the file with a
// capital letter. Otherwise, if the file returns a function or a series of
// function, we will label the file with lowercase.
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';

// Dummy components
// const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

// const App = () => {
//   return (
//     <div className='container'>
//       <BrowserRouter>
//         <div>
//           <Header />
//           <Route exact path='/' component={ Landing } />
//           <Route exact path='/surveys' component={ Dashboard } />
//           <Route path='/surveys/new' component={ SurveyNew } />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

// Refactored to below because we want to check to
// see if the user is logged in

class App extends React.Component {
  componentDidMount() {
    // In future versions of react, componentwillmount might be called
    // on multiple times automatically so by convention, didmount is the
    // preferred location to make any type of initial ajax requests
    
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={ Landing } />
            <Route exact path='/surveys' component={ Dashboard } />
            <Route path='/surveys/new' component={ SurveyNew } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
