import Image from "../../../ui/Image/Image.jsx";
import image2 from "@images/Advertorial/image_2.webp";
import image3 from "@images/Advertorial/image_3.webp";

export default function Section2() {
	return (
		<section>
			<p>
				This is <b>Dr. Sanober Pezad</b>, a renowned dermatologist based in Dallas, Texas.
			</p>
			<p>
				In just 28 days, she has helped women over 40 reverse years of hair thinning and loss — without invasive
				treatments or expensive procedures.
			</p>
			<p>Her medical specialty is trichology, the study of hair and scalp health.</p>
			<p>
				During her time in medical school, where she was awarded a gold medal for her outstanding research, she
				stumbled upon a new method of rejuvenating hair follicles that no one had heard of before.
			</p>
			<p>
				To ensure it wasn't an accident, she asked her colleague, Maria Thompson, to try this new hair restoration
				method:
			</p>
			<Image
				imageDesktop={image2}
				isLazy={true}
			/>
			<p>
				<b>Maria regained fuller, thicker hair in just one month.</b>
			</p>
			<p>Dr. Pezad's neighbor, Emily, also tried this revolutionary technique:</p>
			<Image
				imageDesktop={image3}
				isLazy={true}
			/>
			<p>
				<b>Emily saw significant hair growth and reduced thinning in just eight weeks.</b>
			</p>
			<p>Even her most skeptical peers were astonished by her new method.</p>
			<p>On stage at an international dermatology conference, she declared:</p>
			<p>
				<b>
					“I can help anyone achieve similar results. If you're struggling with hair thinning or loss... you can
					ALSO experience dramatic improvements in 28 days. Without invasive treatments. Thanks to this unique
					serum.”
				</b>
			</p>
			<p>Her colleagues were stunned. It all seemed too good to be true.</p>
			<p>But Dr. Pezad proved them wrong.</p>
		</section>
	);
}
