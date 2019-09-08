import React from 'react';
import PropTypes from 'prop-types';
import clasnames from 'classnames';
import ReactPaginate from 'react-paginate';

import { connect } from 'react-redux';
import { nextPage } from '../../../redux/actions/movies';

import './pagination.scss';

const Pagination = ({ movies: { total_pages }, nextPage, movie }) => {

  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={total_pages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => nextPage({ movie, page:selected })}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  )
}

Pagination.propTypes = {
  movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps, { nextPage })(Pagination);