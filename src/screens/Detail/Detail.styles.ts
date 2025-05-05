//package import
import {StyleSheet} from 'react-native';
import {COLORS} from '../../configs';

//local import

const DetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    overflow: 'hidden',
    zIndex: 1,
    elevation: 1,
    justifyContent: 'flex-end',
  },
  headerImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  headerTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  stickyLabelContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    position: 'relative',
    zIndex: 2,
  },
  stickyLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  content: {
    padding: 16,
    backgroundColor: '#fff',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e53935',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewText: {
    marginTop: 4,
    fontSize: 14,
    color: '#333',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#e53935',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  wrapFooter: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#ddd',
    elevation: 10,
  },
  buttonLeft: {
    alignItems: 'center',
    width: 60,
  },
  text: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
  buttonCenter: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#26a69a',
    paddingVertical: 12,
    alignItems: 'center',
  },
  centerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonRight: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    backgroundColor: COLORS.disabled,
    paddingVertical: 12,
    alignItems: 'center',
  },
  rightText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default DetailScreenStyles;
