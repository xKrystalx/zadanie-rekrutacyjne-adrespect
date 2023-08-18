function animateField(element, attribute = "animate", includeChildren = false) {
  if (includeChildren) {
    if (element.children && element.children.length > 0) {
      for (let child of element.children) {
        if (child) {
          animateField(child, attribute, true);
        }
      }
    }
  }
  if (element.dataset && element.dataset[attribute])
    toggleDatasetAttribute(element.dataset, attribute);
}

//prettier-ignore
function animateFieldById( elementId, attribute = "animate", includeChildren = false,
) {
  let element = document.getElementById(elementId);
  if (element) {
    animateField(element, attribute, includeChildren);
  }
}

function toggleDatasetAttribute(dataset, attribute) {
  //Check if attribute exists
  if (!dataset[attribute]) {
    return;
  }
  //prettier-ignore
  let state = (dataset[attribute] === "true");
  dataset[attribute] = !state;
}

//prettier-ignore
function expandMasonryById(triggeringContainerId, containerToExpandId) {

  console.log('expand')

  let el_TriggeringContainer = document.getElementById(triggeringContainerId);
  let el_ContainerToExpand = document.getElementById(containerToExpandId);

  el_ContainerToExpand.addEventListener('transitionend', (event) =>{
    animateField(el_TriggeringContainer, 'animate', false);
  }, {
    once:true
  });

  animateField(el_ContainerToExpand, 'animate', false);
}

window.addEventListener(
  "load",
  (event) => {
    console.log("load");
    let observables = document.querySelectorAll(".observable");
    let thresholds = [];
    observables.forEach((observable) => {
      if (observable.dataset.observethreshold) {
        thresholds.push(observable.dataset.observethreshold);
      }
      if (thresholds.length > 0) {
        observer = createObserver(thresholds);
      } else {
        observer = createObserver();
      }
      if (observer) {
        registerObservable(observer, observable);
      }
    });
  },
  false,
);

let observer = null;

function createObserver(thresholds = [0.5]) {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log(`Maybe visible ${entry.target}`);
        if (!entry.isIntersecting) {
          return;
        }
        //prettier-ignore
        if ( entry.target.dataset.observethreshold !== undefined && entry.intersectionRatio < entry.target.dataset.observethreshold) {
          return;
        }
        if (entry.target.dataset.animateload !== "false") {
          return;
        }
        animateField(entry.target, "animateload", true);
      });
    },
    {
      threshold: thresholds,
      rootMargin: "0px",
      root: null,
    },
  );
}

function registerObservable(observer, target) {
  observer.observe(target);
}
