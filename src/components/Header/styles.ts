//package import
import {StatusBar, StyleSheet} from 'react-native';

//local import
import {COLORS} from '../../configs';

export default StyleSheet.create({
  headerWrapper: {
    zIndex: 1,
    backgroundColor: COLORS.white_100,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginTop: StatusBar.currentHeight,
  },
  wrapIcon: {alignItems: 'center', width: '15%'},
  wrapTitle: {width: '70%', alignItems: 'center'},
  textTitle: {fontWeight: 'bold', fontSize: 17},
  textDate: {fontSize: 10, marginTop: 7},
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  txtTitle: {
    lineHeight: 26,
    color: COLORS.grays_900,
    fontWeight: '600',
    marginLeft: 8,
    flex: 1,
    textTransform: 'capitalize',
  },
  arrowWrapper: {margin: 0, padding: 0, borderWidth: 0},
  emptyLeftView: {width: 24, height: 24},
});
