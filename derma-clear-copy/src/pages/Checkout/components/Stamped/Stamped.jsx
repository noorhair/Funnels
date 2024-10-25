import { useEffect, useState } from "react";
import styles from "./Stamped.module.scss";

export default function Stamped() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		const scriptTag = document.createElement("script");
		scriptTag.src = "https://cdn1.stamped.io/files/widget.min.js";
		scriptTag.addEventListener("load", () => setLoaded(true));
		document.body.appendChild(scriptTag);
	}, []);

	useEffect(() => {
		if (!loaded) return;

		window.StampedFn.init({
			apiKey: "pubkey-zuPL67824ke4ulxeKDK2mFXPD29y3Q",
			sId: "224726",
		});
	}, [loaded]);

	return (
		<section>
			<h2 className={styles.header}>What Everyone is Saying</h2>
			<div
				id="stamped-main-widget"
				className="stamped-main-widget-loading"
			></div>
		</section>
	);
}
