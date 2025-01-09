import React from "react";
import PropTypes from "prop-types";
import Button from "./common/Button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            <Button
                className="btn-primary"
                btnText="Previous"
                disabled={currentPage === 1}
                btnClickHandler={() => onPageChange(currentPage - 1)}
            />
            <span className="pagination__text">
                Page {currentPage} of {totalPages}
            </span>
            <Button
                className="btn-primary"
                btnText="Next"
                disabled={currentPage === totalPages}
                btnClickHandler={() => onPageChange(currentPage + 1)}
            />
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func,
}

export default Pagination;
