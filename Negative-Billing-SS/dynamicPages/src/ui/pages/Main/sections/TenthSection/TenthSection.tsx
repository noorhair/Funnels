import styles from "./TenthSection.styles.module.scss";
import { Section } from "@sharedUI";

import { CommentCard } from "@pagesUI/Main/components";

import img from "@images/DeeDee.webp";

export default function TenthSection() {
	return (
		<Section
			className={styles.section_container}
			isBeige
		>
			<div className={styles.reviews_container}>
				<div className={styles.top_section}>
					<h1 className={styles.title}>Reviews</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="213"
						height="41"
						viewBox="0 0 213 41"
						fill="none"
					>
						<g clipPath="url(#clip0_1_1702)">
							<path
								d="M39.8529 0.90332H0V40.9033H39.8529V0.90332Z"
								fill="#73CF11"
							/>
							<path
								d="M83.027 0.90332H43.174V40.9033H83.027V0.90332Z"
								fill="#73CF11"
							/>
							<path
								d="M126.201 0.90332H86.348V40.9033H126.201V0.90332Z"
								fill="#73CF11"
							/>
							<path
								d="M169.375 0.90332H129.522V40.9033H169.375V0.90332Z"
								fill="#73CF11"
							/>
							<path
								d="M212.549 0.90332H172.696V40.9033H212.549V0.90332Z"
								fill="#73CF11"
							/>
							<path
								d="M213 0.999023H193V40.999H213V0.999023Z"
								fill="#DCDCE6"
							/>
							<path
								d="M19.9265 27.8617L25.9875 26.32L28.5198 34.1533L19.9265 27.8617ZM33.875 17.7367H23.2061L19.9265 7.65332L16.6469 17.7367H5.97797L14.6128 23.9867L11.3332 34.07L19.968 27.82L25.2817 23.9867L33.875 17.7367Z"
								fill="white"
							/>
							<path
								d="M63.1005 27.8617L69.1615 26.32L71.6938 34.1533L63.1005 27.8617ZM77.049 17.7367H66.3801L63.1005 7.65332L59.8209 17.7367H49.152L57.7868 23.9867L54.5072 34.07L63.142 27.82L68.4557 23.9867L77.049 17.7367Z"
								fill="white"
							/>
							<path
								d="M106.275 27.8617L112.335 26.32L114.868 34.1533L106.275 27.8617ZM120.223 17.7367H109.554L106.275 7.65332L102.995 17.7367H92.326L100.961 23.9867L97.6812 34.07L106.316 27.82L111.63 23.9867L120.223 17.7367Z"
								fill="white"
							/>
							<path
								d="M149.449 27.8617L155.51 26.32L158.042 34.1533L149.449 27.8617ZM163.397 17.7367H152.728L149.449 7.65332L146.169 17.7367H135.5L144.135 23.9867L140.855 34.07L149.49 27.82L154.804 23.9867L163.397 17.7367Z"
								fill="white"
							/>
							<path
								d="M192.623 27.8617L198.684 26.32L201.216 34.1533L192.623 27.8617ZM206.571 17.7367H195.902L192.623 7.65332L189.343 17.7367H178.674L187.309 23.9867L184.029 34.07L192.664 27.82L197.978 23.9867L206.571 17.7367Z"
								fill="white"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_1702">
								<rect
									width="212.549"
									height="40"
									fill="white"
									transform="translate(0 0.90332)"
								/>
							</clipPath>
						</defs>
					</svg>
				</div>

				<div className={styles.bottom_section}>
					<div className={styles.progress_container}>
						<p>5-star</p>
						<div className={styles.progress_bar}>
							<div
								className={styles.progress_bar_relative}
								style={{ backgroundColor: "#00B67A", width: "77%" }}
							></div>
						</div>
						<p>77%</p>
					</div>

					<div className={styles.progress_container}>
						<p>4-star</p>
						<div className={styles.progress_bar}>
							<div
								className={styles.progress_bar_relative}
								style={{ backgroundColor: "#72CF10", width: "8%" }}
							></div>
						</div>
						<p>8%</p>
					</div>

					<div className={styles.progress_container}>
						<p>3-star</p>
						<div className={styles.progress_bar}>
							<div
								className={styles.progress_bar_relative}
								style={{ backgroundColor: "#FFCE00", width: "5%" }}
							></div>
						</div>
						<p>5%</p>
					</div>
				</div>
			</div>

			<div className={styles.cards_container}>
				<CommentCard
					customer={"Annette D. Brian"}
					reviews={4}
					date={"April 25, 2024"}
					boldText={"My hair stopped falling out in big…"}
					comment={
						"My hair stopped falling out in big clumps on the brush and comb. Now seeing less hair loss. My hair is getting stronger & thicker. NOOR HAIR products are the best ever. Well keep buying NOOR HAIR products, GOD BLESS YOU, & Thank You..❤️❤️❤️❤️❤️❤️❤️"
					}
					dateOfExperience={"February 01, 2024"}
					initials={"AD"}
				/>

				<CommentCard
					customer={"DeeDee Lockard"}
					reviews={1}
					date={"Jan 16, 2024"}
					boldText={"Fuller and Stronger"}
					comment={
						"I have tried many products none of which worked. On trying Noor Hair I was presently surprised to see a difference fairly quickly. I started getting complements on my hair and it started growing much faster. It has become fuller and longer."
					}
					dateOfExperience={"January 15, 2024"}
					img={img}
				/>

				<CommentCard
					customer={"Joanne Carterd"}
					reviews={2}
					date={"Mar 5, 2024"}
					boldText={"I began to see results in 2 month and I…"}
					comment={
						"I began to see results in 2 month and I am 67yrs , I really didn't believe what I was seeing I really got close to the mirror. THE PRODUCT REALLY WORKS !!! I am a real person !!"
					}
					dateOfExperience={"March 01, 2024"}
					initials={"JC"}
				/>
			</div>
			<p className={styles.last_paragraph}>
				In just a moment I’m going to tell you how <span>you can get the Super Serum FOR FREE.</span> But first let me share how
				easy and simple it is to use.
			</p>
		</Section>
	);
}
