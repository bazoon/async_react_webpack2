'use strict';

export default () => {  
  return new Promise(resolve => {
    require.ensure([], () => {

      setTimeout(function () {
        let hello = require('./hello.jsx');
        resolve(hello);  
      }, 2000);
      

    });
  });
};