import { useEffect } from "react";

const StampedWidget = () => {
	useEffect(() => {
		//@ts-ignore
		console.log("window.StampedFn");
		console.log(window.StampedFn);
		if (window.StampedFn) {
			//@ts-ignore
			window.StampedFn.init({
				apiKey: "pubkey-zuPL67824ke4ulxeKDK2mFXPD29y3Q",
				sId: "224726",
			});
		}
	}, []);

	return <div id="stamped-main-widget"></div>;
};

export default StampedWidget;
