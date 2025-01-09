import { KICKSTARTER_PROJECTS_API_URL } from "../constants/commonConstants";

export const fetchKickStarterProjects = async () => {
    try {
        const response = await fetch(KICKSTARTER_PROJECTS_API_URL);
        const projects = await response.json();
        if (projects && projects.length > 0) {
            return projects;
        } else {
            return [];
        }
    } catch (error) {
        console.error(`Error occurred while fetching kickstarter projects - ${error}`);
        return [];
    }
};
