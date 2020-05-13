import React from 'react';
import { connect } from "react-redux";
import {removeItem} from '../actions/Action';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeItem(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, {removeItem}) (AddedFeature);
