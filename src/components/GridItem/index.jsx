import React, { Component } from 'react';
//二次封装
import { Grid } from 'antd-mobile';
import { shape, bool, string, number, oneOfType, func } from 'prop-types';

class GridItem extends Component {
  render() {
    let { data, hasLine, columnNum, onClick } = this.props;
    return (
      <div>
        <Grid
          hasLine={hasLine}
          data={data}
          columnNum={columnNum}
          activeStyle={false}
          itemStyle={{ height: '1.33rem' }}
          renderItem={(row, index) => {
            return <div onClick={evt=>onClick(row.id)} style={{ lineHeight: '1.33rem' }}>{row.title}</div>
          }}
        />
      </div>
    );
  }
}

GridItem.propsType = {
  data: shape({ id: number, title: string }).isReauired,
  hasLine: bool,
  columnNum: number,
  onClick: func
}
GridItem.defaultProps = {
  hasLine: true,
  columnNum: 4,
  onClick: ()=>{}
}

export default GridItem;
