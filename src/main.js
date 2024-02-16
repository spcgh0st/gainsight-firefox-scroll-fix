const fixScroll = () => {

	const patchStyle = (nodeList) => {

		for(const innerNode of nodeList) {
			if(innerNode.shadowRoot != null) {
				for(const targetNode of innerNode.shadowRoot.querySelectorAll('.ag-center-cols-viewport')) {
					let initStyle = targetNode.getAttribute("style");
					if(initStyle.search(/scrollbar/) == -1) {
						let modStyle = initStyle + " scrollbar-width: initial;"
						targetNode.setAttribute("style", modStyle)
					}
				}
			}
		}

	};


	for(const rootNode of document.getElementsByClassName('ng-star-inserted')) {
		if(rootNode.shadowRoot != null) {
			patchStyle(rootNode.shadowRoot.querySelectorAll(".ng-star-inserted"));
			patchStyle(rootNode.shadowRoot.querySelectorAll("gs-report-widget-element-dashboard"));
		}
	}
}


document.getElementsByTagName("body")[0].addEventListener("dblclick", (event) => {
	console.log("dblclicked...");
	fixScroll();
});