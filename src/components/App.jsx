import { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { GlobalStyle } from './GlobalStyle';

axios.defaults.baseURL = 'https://thedogapi.com/v1/';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export class App extends Component {
  state = {
    breeds: [],
    dog: null,
    error: null,
  };
  async componentDidMount() {
    try {
      const response = await axios.get('/breeds');
      this.setState({ bpeeds: response.data });
    } catch (error) {}
  }

  //параметры поиска
  selectBreed = async option => {
    // console.log(option.value);
    try {
      // const response = await axios.get('/images/search'?breed_id=${option.value'});
      //или
      const response = await axios.get('/images/search', {
        params: { breed_id: option.value },
      });
      this.setState({ dog: response.data[0] });
    } catch (e) {
      this.setState({ error: 'Упс, а песика немає:(' });
    }
  };

  buildSelectOptions = () => {
    return this.state.breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  };
  render() {
    const { dog, error } = this.state;
    const options = this.buildSelectOptions();

    return (
      <>
        <Select options={options} onChange={this.selectBreed} />
        {error && <div>{error}</div>}
        {dog && (
          <div style={{ display: 'flex', gap: 16 }}>
            <img src={dog.url} width="480" alt="dog" />
            <div>
              <p> Name:{dog.breeds[0].name}</p>
              <p> Name:{dog.breeds[0].breed_group}</p>
              <p>Temperament:{dog.breeds[0].temperament}</p>
            </div>
          </div>
        )}
        <GlobalStyle />
      </>
    );
  }
}
