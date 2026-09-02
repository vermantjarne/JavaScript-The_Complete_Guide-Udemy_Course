class DOMHelper {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}

class Component {
    element;
    hostElement;
    insertBefore;

    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.hostElement = document.getElementById(hostElementId);
        }
        else {
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }

    detach() {
        if (this.element) {
            this.element.remove();
        }
    }
    
    attach() {
        this.hostElement.insertAdjacentElement(this.insertBefore ? "afterbegin" : "beforeend", this.element);
    }
}

class Tooltip extends Component {
    closeNotifierHandler;

    constructor(closeNotifierHandler) {
        super();
        this.closeNotifierHandler = closeNotifierHandler;
        this.create();
    }

    closeTooltip = () => {
        this.detach();
        this.closeNotifierHandler();
    }

    create() {
        const tooltipElement = document.createElement("div");
        tooltipElement.className = "card";
        tooltipElement.textContent = "dummy";
        tooltipElement.addEventListener("click", this.closeTooltip);
        this.element = tooltipElement;
    }
}

class ProjectItem {
    id;
    updateProjectListsHandler;
    type;
    hasActiveTooltip = false;

    constructor(id, updateProjectListsHandler, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsHandler;
        this.type = type;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    showMoreInfoHandler() {
        if (this.hasActiveTooltip) {
            return;
        }
        const tooltip = new Tooltip(() => this.hasActiveTooltip = false);
        tooltip.attach();
        this.hasActiveTooltip = true;
    }
    
    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoButton = projectItemElement.querySelector("button:first-of-type");
        moreInfoButton.addEventListener("click", this.showMoreInfoHandler.bind(this));
        
    }
    
    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchButton = projectItemElement.querySelector("button:last-of-type");
        switchButton = DOMHelper.clearEventListeners(switchButton);
        switchButton.textContent = type === "active" ? "Finish" : "Activate";
        switchButton.addEventListener("click", this.updateProjectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsHandler, type) {
        this.updateProjectListsHandler = updateProjectListsHandler;
        this.connectSwitchButton(type);
    }
}

class ProjectList {
    type;
    switchHandler;
    projects = [];

    constructor(type) {
        this.type = type;
        const projectItems = document.querySelectorAll(`#${this.type}-projects li`);
        for (const projectItem of projectItems) {
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this), this.type));
        }
    }

    setSwitchHandler(switchHandler) {
        this.switchHandler = switchHandler;
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(project => project.id === projectId);
        // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(project => project.id === projectId));
        this.projects = this.projects.filter(project => project.id !== projectId);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList("active");
        const finishedProjectsList = new ProjectList("finished");
        activeProjectsList.setSwitchHandler(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.setSwitchHandler(activeProjectsList.addProject.bind(activeProjectsList));
    }
}

App.init();