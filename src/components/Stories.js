import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Button } from '@material-ui/core';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { confirmAlert } from 'react-confirm-alert';
import DeleteAlert from './DeleteAlert';
import trash from '../assets/img/trash.svg';
import './Stories.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as moment from 'moment';

class Stories extends Component {
  tableColumns = () => {
    const columns = [{
      dataField: 'title',
      text: 'Title',
      formatter: this.titleFormatter
    }, {
      dataField: 'date',
      text: 'Date',
      formatter: this.dateFormatter
    }, {
      dataField: '',
      text: '',
      align: 'center',
      formatter: this.deleteButtonFormatter,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <DeleteAlert 
                  handleDelete = { this.props.handleDelete }
                  onClose = { onClose }
                  row = { row }
                />
              );
            }
          });
        }
      }
    }];
    return columns;
  }

  tablePaginationOptions = (stories) => {
    const options = {
      paginationSize: 5,
      pageStartIndex: 1,
      showTotal: true,
      paginationTotalRenderer: this.customTotal,
      sizePerPageList: [{
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: '25', value: 25
      }, {
        text: 'All Stories', value: stories.length
      }] 
    };
    return options;
  }
  
  dateFormatter = (cell, row) => {
    let date = moment(row.date).calendar(null, {
      sameDay: 'LT',
      nextDay: 'Tomorrow',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: 'MMM DD',
      sameElse: 'MMM DD'
    });
    return (
      <span className="">{date}</span>
    );
  }

  deleteButtonFormatter = (cell, row) => {
    return (
      <div className="actions mb-0">
        <Button className="member-link btn delete-btn" title='Delete'>
          <img src={trash} alt='Delete, trash can icon.'></img>
        </Button>
      </div>
    );
  }

  titleFormatter = (cell, row) => {
    return (
      <Link href={row.url}>
        <span className="title">{row.title}</span> - <span className="author">{row.author}</span> -
      </Link>
    );
  }
  
  render() {
    let stories = this.props.stories;

    return (
      <div className="stories">
        <div className="site-section pb-0">
          <div className="title-bar row">
            <div className="titlebar-left col-md-6">
              <h1>HN Feed</h1>
              <h2 className="title">{'We <3 Hacker News'}</h2>
            </div>
          </div>
          <div className="content row mt-4">
            <div className="content-wrapper container">
              <ToolkitProvider
                keyField="id"
                data={ stories }
                columns={ this.tableColumns() }
              >
                {
                  props => (
                    <div>
                      <BootstrapTable
                        { ...props.baseProps }
                        noDataIndication="No news to be showed."
                        pagination={ paginationFactory(this.tablePaginationOptions(stories)) }
                        hover
                      />
                    </div>
                  )
                }
              </ToolkitProvider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Stories.propTypes = {
  stories: PropTypes.array
};

export default Stories;