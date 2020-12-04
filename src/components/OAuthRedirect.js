import {useEffect} from 'react';
import {connect} from 'react-redux';

const RedirectToOAuth = ({sessionData}) => {
  useEffect(() => {
    if (sessionData) {
      window.location.replace(sessionData.configs["oauth.vendor.url"]);
    }
  }, [sessionData]);
  return null;
};

const mapStateToProps = state => {
  return {
    sessionData: state.session.data
  };
};

export default connect(mapStateToProps)(RedirectToOAuth);