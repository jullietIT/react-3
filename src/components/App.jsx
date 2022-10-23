import { Component } from 'react';
import { fetchBreeds, fetchDogByBreed } from './api.js';
import { BreedSelect } from './BreedSelect';
import { GlobalStyle } from './GlobalStyle';
import { Dog } from './Dog';

export class App extends Component {
  state = {
    breeds: [],
    dog: null,
    error: null,
  };
  async componentDidMount() {
    try {
      const breeds = await fetchBreeds();
      this.setState({ breeds: breeds });
    } catch (error) {
      this.setState({ error: 'Упс, а песика немає:(' });
    }
  }

  //параметры поиска
  selectBreed = async breedId => {
    try {
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch (e) {
      this.setState({ error: 'Упс, а песика немає:(' });
    }
  };

  render() {
    const { breeds, dog, error } = this.state;

    return (
      <>
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        {error && <div>{error}</div>}
        {dog && <Dog dog={dog} />}
        <GlobalStyle />
      </>
    );
  }
}
