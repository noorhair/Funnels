import styles from "./Header.module.scss";
import Container from "@ui/Container/Container.jsx";
import { Link } from "react-scroll";

export default function Header() {
	const LinkOptions = {
		to: "wheel",
		duration: 1700,
		smooth: true,
	};

	return (
		<header className={styles.header}>
			<p className={styles.text}>Advertorial</p>
			<Container outerStyles={styles.outerStyles}>
				<p className={styles.title}>Health Secrets</p>
				<div className={styles.headerMenuContainer}>
					<ul className={styles.headerMenu}>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>World</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>U.S.</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>Technology</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>Design</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>Culture</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>Business</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>Politics</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>Opinion</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>Science</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>Health</Link>
						</li>
						<li className={styles.headerMenuItem}>
							<Link {...LinkOptions}>Style</Link>
						</li>
					</ul>
					<p className={styles.headerMenuSearch}>
						Search{" "}
						<svg
							fill="#000000"
							height="19px"
							width="19px"
							viewBox="0 0 488.4 488.4"
						>
							<g>
								<g>
									<path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6    s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2    S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7    S381.9,104.65,381.9,203.25z" />
								</g>
							</g>
						</svg>
					</p>
				</div>
			</Container>
		</header>
	);
}
