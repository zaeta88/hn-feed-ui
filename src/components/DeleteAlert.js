import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DeleteAlert.css';

class DeleteAlert extends Component {

  render() {
    const { row } = this.props;
    return (
      <div className="react-confirm-alert-overlay">
        <div className="react-confirm-alert-body">
          <h1>Delete Confirmation</h1>
          Are you sure to delete the story "{row.title}"?
          <div className="react-confirm-alert-button-group">
            <button
              onClick={() => {
                this.props.handleDelete(row);
                this.props.onClose();
              }}
            >
              Yes, delete it!
            </button>
            <button onClick={ this.props.onClose }>No</button>
          </div>
        </div>
      </div>
    );
  }
}

DeleteAlert.propTypes = {
  row: PropTypes.objectOf(PropTypes.string),
  handleDelete: PropTypes.func,
  onClose: PropTypes.func
};

export default DeleteAlert;