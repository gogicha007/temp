import SearchBar from './components/search/search';
import Results from './components/results/results';
import './App.css';
import { Component } from 'react';
import { IFData } from './types/interface';

class App extends Component {
  state = {
    results: [] as IFData[],
  };

  handleDataChange = (results: IFData[]) => {
    console.log('on data change')
    this.setState({results})
  }
  render() {
    return (
      <>
        <div className="top-control">
          <SearchBar onDataChange={this.handleDataChange}/>
        </div>
        <div className="results">
          <h2>Results</h2>
          {this.state.results && this.state.results.length > 0 && <Results data={this.state.results}/>}
        </div>
      </>
    );
  }
}

export default App;
