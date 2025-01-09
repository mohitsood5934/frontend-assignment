import React from 'react';
import PropTypes from 'prop-types';

const RowsPerPageSelect = ({ rowsPerPage, onRowsPerPageChange, options }) => {
    return (
        <div className="pagination-control">
            <label htmlFor="projectsPerPage">Select rows per page:&nbsp;</label>
            <select
                id="projectsPerPage"
                value={rowsPerPage}
                onChange={onRowsPerPageChange}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

RowsPerPageSelect.propTypes = {
    rowsPerPage: PropTypes.number.isRequired,
    onRowsPerPageChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RowsPerPageSelect;
