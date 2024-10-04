function CustomRender(Element, container){
    const domElement = document.createElement(Element.type);
    domElement.innerHTML = Element.children;
    domElement.setAttribute('href', Element.props.href);
    domElement.setAttribute('target', Element.props.target);
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const customreact = document.querySelector("#root");

CustomRender(reactElement, customreact)