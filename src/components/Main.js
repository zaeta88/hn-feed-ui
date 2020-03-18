import React, { Component } from 'react';
import Stories from './Stories';
import { get, del } from '../js/fetcher';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }

  componentWillMount() {
    this.loadStories();
  }

  loadStories = async () => {
    const result = await get('/stories');
    this.setState({
      stories: result
    });
  }

  handleDeleteRequest = async (story) => {
    let { stories } = this.state;
    await del(`/stories/${story._id}`);
    this.setState({
      stories: stories.filter((s) => { return s !==story})
    });
  }

  handleDelete = (story) => {
    this.handleDeleteRequest(story);
  }

  render() {
    return (
      <div className="wrapper-div" id="wrapper">
        <main id="main">
          <div className="container">
            <Stories 
              stories={this.state.stories}
              handleDelete={this.handleDelete}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;