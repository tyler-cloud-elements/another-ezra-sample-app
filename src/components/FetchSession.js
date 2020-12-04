import {useEffect, useMemo} from 'react';
import {connect} from 'react-redux';
import {getCreateOAuthRedirectUrl} from '../actions/instances';

const FetchSession = ({initSession, elementKey}) => {
  useEffect(() => {
    if (elementKey) {
      initSession(elementKey);
    }
  }, [initSession, elementKey]);
  return null;
};

const mapDispatchToProps = dispatch => {
  return {
    initSession: elementKey => dispatch(getCreateOAuthRedirectUrl(elementKey))
  };
};

export default connect(null, mapDispatchToProps)(FetchSession);
