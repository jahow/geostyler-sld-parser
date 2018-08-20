import { Style } from 'geostyler-style';

const pointSimplePoint: Style = {
  name: 'Simple Point',
  rules: [{
    name: '',
    symbolizers: [{
      kind: 'Mark',
      wellKnownName: 'Circle',
      color: '#FF0000',
      radius: 6
    }]
  }]
};

export default pointSimplePoint;
