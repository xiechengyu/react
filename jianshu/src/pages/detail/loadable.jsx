import React from 'react';
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
  	return <div style={{fontSize:"100px",color:"red",paddingTop:"100px",textAlign:"center"}}>正在加载</div>
  }
});

export default () => <LoadableComponent/>