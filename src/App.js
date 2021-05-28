import logo from './logo.svg'
import './App.css'
import axios from 'axios'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useEffect, useState, useReducer } from 'react'

import Header from './components/Header.jsx'
import GradientButton from './components/GradientButton.jsx'

import { WatchListContextProvider } from './context/WatchListContext.jsx';

import VaderSwapPage from './pages/VaderSwapPage.jsx'
import CoinSummaryPage from './pages/CoinSummaryPage.jsx'
import VaderStakingPage from './pages/VaderStakingPage';
import VaderUSDVPage from './pages/VaderUSDVPage';
import VaderAnchorPage from './pages/VaderAnchorPage';
import VaderLendingPage from './pages/VaderLendingPage';
import VaderPoolsPage from './pages/VaderPoolsPage';
import VaderStatsPage from './pages/VaderStatsPage';
import CoinDetailPage from './pages/CoinDetailPage';
import VaderCreatePairPage from './pages/VaderCreatePairPage';
import VaderAddLiquidityPage from './pages/VaderAddLiquidityPage';

//reducer for managing state (redux pattern)
function reducer(state, action){
  switch(action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, 0);
  const [loaded, setLoaded] = useState(false);

  return (
    <WatchListContextProvider>
        <Router>
        <div className="App flex items-center flex-col">
        
          <Header></Header>
          {/* <VaderCreatePairPage></VaderCreatePairPage> */}

        </div>

        
        <Route path='/coins/:id' component={CoinDetailPage} />
        <Route exact path='/Stats' component={VaderStatsPage} />
        <Route exact path='/Swap' component={VaderSwapPage} />
        <Route exact path='/Pools' component={VaderPoolsPage} />
        <Route exact path='/USDV' component={VaderUSDVPage} />
        <Route exact path='/Staking' component={VaderStakingPage} />
        <Route exact path='/Anchor' component={VaderAnchorPage} />
        <Route exact path='/Lending' component={VaderLendingPage} />
        <Route exact path='/Create' component={VaderCreatePairPage} />
        <Route exact path ='/Add' component={VaderAddLiquidityPage} />
        
        </Router>
    </WatchListContextProvider>
    

  )
}

export default App;
