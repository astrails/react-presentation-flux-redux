import { addLocation, refresh, remove } from 'reduxx/actions/locations';
import Weather from 'components/weather';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  addLocation: (location) => dispatch(addLocation(location)),
  refresh:     (location) => dispatch(refresh(location)),
  remove:      (location) => dispatch(remove(location))
});

const mapStateToProps = (state) => ({ locations: state.locations });

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
