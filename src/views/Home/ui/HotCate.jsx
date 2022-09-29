import React, { Component } from 'react';
import GridItem from '@/components/GridItem';



class HotCate extends Component {
  render() {
    return (
      <div className='home-hotcate-container'>
        <div className='title'>热门分类</div>
        {
          this.props.data.length > 0
            ?
            <GridItem onClick={id => {
              console.log(id);
            }} data={this.props.data} />
            : null
        }

      </div>
    );
  }
}

export default HotCate;
