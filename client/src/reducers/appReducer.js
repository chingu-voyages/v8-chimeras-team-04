import React from 'react';

const data = {  
    '1': {
      id: '1',
      position: 'Front End Developer',
      company: 'Gieco Insurance',
      date: 110
    },
    '2': {
      id: '2',
      position: 'Web Developer',
      company: 'Starco Insurance',
      date: 30
    },
    '3': {
      id: '3',
      position: 'Front End Engineer',
      company: 'Norco',
      date: 80
    },
    '4': {
      id: '4',
      position: 'Front End Developer',
      company: 'Teh Googleh',
      date: 400
    },
  
  }

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_APPS':
        console.log(action.payload);
            return data;
        default: 
            return state;
    }
}

export { AppReducer as default };