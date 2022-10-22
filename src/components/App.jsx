import { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { GlobalStyle } from './GlobalStyle';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1.1';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

export class App extends Component {
  async componentDidMount() {
    try {
      const response = await axios.get('/breeds');
      console.log(response);
    } catch (error) {}
  }
  selectBreed = option => {
    console.log(option);
  };
  render() {
    return (
      <>
        <Select options={[]} onChange={this.selectBreed} />
        <GlobalStyle />
      </>
    );
  }
}
