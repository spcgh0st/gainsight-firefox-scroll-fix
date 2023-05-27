const fixScroll = () => {

	const doFix = (nodeList) => {
		for(const rootNode of nodeList) {
			if(rootNode.shadowRoot != null) {
				let sr = rootNode.shadowRoot;
				for(let childList of sr.querySelectorAll(".ag-center-cols-viewport")) {
					let initStyle = childList.getAttribute("style");
					if(initStyle.search(/scrollbar/) == -1) {
						let modStyle = initStyle + " scrollbar-width: initial;"
						childList.setAttribute("style", modStyle)
					}
				}
			}
		}
	};

	doFix(document.getElementsByClassName("ng-star-inserted"));
	doFix(document.getElementsByTagName("gs-report-element-overlay"));
}


document.getElementsByTagName("body")[0].addEventListener("dblclick", (event) => {
	console.log("dblclicked...");
	fixScroll();
});
