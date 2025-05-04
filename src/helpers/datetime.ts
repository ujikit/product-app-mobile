import {NUMBER} from '.';
import {DUMMY_DATA} from '../constants';

// documentation:
// - date: {
//   type: new Date() format,
//   example: 'Wed Mar 30 2022 17:59:56 GMT+0700 (Western Indonesia Time)'
// },
// - separator: {
//   type: string,
//   oneOf: [':', '/', '|', 'as you wish'],
//   example: '22/09/2022'
// }

const datetime = {
  getDate: (date: number, separator = ' ') => {
    const defaultDateTime = new Date(date);
    const getDate = defaultDateTime.getDate();
    const getMonth = defaultDateTime.getMonth();
    const getFullYear = defaultDateTime.getFullYear();

    return `${NUMBER.add0Prefix(getDate)}${separator}${
      DUMMY_DATA.MONTH[getMonth].long
    }${separator}${NUMBER.add0Prefix(getFullYear)}`;
  },
  getTime: (date: number, separator = ':') => {
    const defaultDateTime = new Date(date);
    const getHours = defaultDateTime.getHours();
    const getMinutes = defaultDateTime.getMinutes();

    return `${NUMBER.add0Prefix(getHours)}${separator}${NUMBER.add0Prefix(
      getMinutes,
    )}`;
  },
};

export default datetime;
