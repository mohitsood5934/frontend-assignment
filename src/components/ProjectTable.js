import React from "react";
import PropTypes from "prop-types";
import { NO_OF_ROWS_OPTIONS_ARRAY } from "../constants/commonConstants";
import Pagination from "./Pagination";
import RowsPerPageSelect from "./common/RowsPerPageSelect";
import "../css/ProjectTable.css";

const ProjectTable = ({ projects, currentPage, totalPages, onPageChange, projectsPerPage, onRowsPerPageChange }) => {
    return (
        <>
            <table className="project-table" aria-labelledby="Kickstarter Projects">
                <caption id="project-tabledesc">List of highly rated Kickstarter Projects</caption>
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Percentage funded</th>
                        <th scope="col">Amount pledged</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={index}>
                            <td>{project["s.no"]}</td>
                            <td>{project["percentage.funded"]}</td>
                            <td>{project["amt.pledged"]}</td>
                        </tr>
                    ))}
                    {projects.length < projectsPerPage &&
                        Array.from({ length: projectsPerPage - projects.length }).map((_, idx) => (
                            <tr key={`empty-row-${idx}`}>
                                <td colSpan="3" className="empty-row">No data</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <RowsPerPageSelect
                rowsPerPage={projectsPerPage}
                options={NO_OF_ROWS_OPTIONS_ARRAY}
                onRowsPerPageChange={onRowsPerPageChange}
            />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </>
    );
};

ProjectTable.propTypes = {
    projects: PropTypes.array.isRequired,
    projectsPerPage: PropTypes.number.isRequired,
    onRowsPerPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func,
};

export default ProjectTable;
