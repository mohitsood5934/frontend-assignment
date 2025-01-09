import React, { useEffect, useState } from "react";
import { fetchKickStarterProjects } from "./utils/fetchProjects";
import { PROJECTS_PER_PAGE } from "./constants/commonConstants";
import ProjectTable from "./components/ProjectTable";
import './App.css';

const App = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage, setProjectsPerPage] = useState(PROJECTS_PER_PAGE);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchKickStarterProjects();
                setProjects(data);
            } catch (error) {
                setProjects([]);
            }
        };

        fetchData();
    }, []);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleProjectsPerPageChange = (event) => {
        setProjectsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to the first page when the number of rows per page changes
    };


    return (
        <div className="projects">
            <h1 className="projects__title">"Kickstarter Projects!"</h1>
            <ProjectTable
                projects={currentProjects}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                projectsPerPage={projectsPerPage}
                onRowsPerPageChange={handleProjectsPerPageChange}
            />
        </div>
    );
};

export default App;
