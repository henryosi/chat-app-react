import React, { Component } from 'react';
import Categories from '../';
import DisplayPosts from '../DisplayPosts';
import { socket } from '../../index.js';

class Mathematics extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  getCategories =  (e) => {
      socket.emit('findMathematics', 'findMathematicsData')
    }


  componentDidMount() {
    socket.on('foundMathematics', (data) => {
      console.log(Date(), 'MirZA')
      this.setState({
        categoryData: data
      });
      console.log(this.state.categoryData, 'JAMES')
    })

    this.getCategories();
  }

  render() {
    return (
            <div>
              <div className='chatbox'>
                <div className='chatboxContainer'>
                  <h2 className='chatboxContainerHeading'>Mathematics</h2>
                  {this.state.categoryData ? <DisplayPosts postsData={this.state.categoryData}/> : null}
                </div>
                  <Categories />
              </div>
            </div>
    );
  }
}

export default Mathematics;
