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
        element.scrollIntoView({behavior: "smooth"});
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
    text;

    constructor(closeNotifierHandler, text, hostElementId) {
        super(hostElementId);
        this.closeNotifierHandler = closeNotifierHandler;
        this.text = text;
        this.create();
    }

    closeTooltip = () => {
        this.detach();
        this.closeNotifierHandler();
    }

    create() {
        const tooltipElement = document.createElement("div");
        tooltipElement.className = "card";
        // tooltipElement.textContent = this.text;
        const tooltipTemplate = document.getElementById("tooltip");
        const tooltipBody = document.importNode(tooltipTemplate.content, true);
        tooltipBody.querySelector("p").textContent = this.text;
        tooltipElement.append(tooltipBody);
        
        const hostElementPosLeft = this.hostElement.offsetLeft;
        const hostElementPosTop = this.hostElement.offsetTop;
        const hostElementHeight = this.hostElement.offsetHeight;
        const parentElementScrollDistance = this.hostElement.parentElement.scrollTop;

        const x = hostElementPosLeft + 15;
        const y = hostElementPosTop + hostElementHeight - parentElementScrollDistance - 10;

        tooltipElement.style.position = "absolute";
        tooltipElement.style.left = `${x}px`;
        tooltipElement.style.top = `${y}px`;

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
        const projectElement = document.getElementById(this.id);
        // projectElement.dataset.someInfo = "Test";
        const tooltipText = projectElement.dataset.extraInfo;
        const tooltip = new Tooltip(() => this.hasActiveTooltip = false, tooltipText, this.id);
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

        // const someScript = document.createElement("script");
        // someScript.textContent = "alert('Hi there');";
        // document.head.append(someScript);

        // this.startAnalytics();
        
        // document.getElementById("start-analytics-button").addEventListener("click", this.startAnalytics);

        const timerId = setTimeout(this.startAnalytics, 3000);

        document.getElementById("stop-analytics-button").addEventListener("click", () => {
            clearTimeout(timerId);
        });
    }

    static startAnalytics() {
        const analyticsScript = document.createElement("script");
        analyticsScript.src = "assets/scripts/analytics.js";
        analyticsScript.defer = true;
        document.head.append(analyticsScript);
    }
}

App.init();