import {useMemo} from 'react';
import {connect} from "react-redux";
import FetchSession from "../components/FetchSession";
import Mask from "../components/Mask";

const bodyStyle = {
  marginLeft: '1rem'
};

const Provisioner = ({isLoading, location, error, data}) => {
  const elementKey = useMemo(() => {
    if (location) {
      return location.query.element;
    }
  }, [location]);

  return (
    <div>
      <FetchSession elementKey={elementKey} />
      <Mask showMask={isLoading} loadingText={`Loading ${elementKey}`} />
      <div>
        <p style={bodyStyle}>
          {!elementKey &&
            'Add ?element=<someElementKey> to URL to kick tihngs off'
          }
          {error && 
            <>
              <h2>Error</h2>
              <pre>{JSON.stringify(error, null, 2)}</pre>
            </>
          }
          {data && data[elementKey] &&
            <>
              <h2>Success</h2>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </>
          }
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.instances.loading,
    location: state.router.location,
    error: state.instances.error,
    data: state.instances.data,
  };
};


export default connect(mapStateToProps)(Provisioner);
