//package import
import {StyleSheet} from 'react-native';

//local import
import {COLORS} from '../../configs';

const CartScreenStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  flatListContainer: {flexGrow: 1, paddingBottom: 150},
  flatListEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    height: 110,
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 25,
  },
  wrapTotal: {flex: 1, justifyContent: 'center'},
  textTotal: {fontSize: 16},
  wrapCheckout: {flex: 1, justifyContent: 'center'},
  buttonCheckout: {backgroundColor: COLORS.primary},
  textCheckout: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});

export default CartScreenStyles;
