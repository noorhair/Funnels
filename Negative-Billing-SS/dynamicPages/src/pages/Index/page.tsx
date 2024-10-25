// import * as Sections from "@pagesUI/Main/sections";
import Header  from "@pagesUI/Main/sections/Header/Header.tsx";
import Announcing  from "@pagesUI/Main/sections/Announcing/Announcing.tsx";
import FirstSection  from "@pagesUI/Main/sections/FirstSection/FirstSection.tsx";
import SecondSection  from "@pagesUI/Main/sections/SecondSection/SecondSection.tsx";
import ThirdSection  from "@pagesUI/Main/sections/ThirdSection/ThirdSection.tsx";
import FourthSection  from "@pagesUI/Main/sections/FourthSection/FourthSection.tsx";
import FifthSection  from "@pagesUI/Main/sections/FifthSection/FifthSection.tsx";
import SixthSection  from "@pagesUI/Main/sections/SixthSection/SixthSection.tsx";
import SeventhSection  from "@pagesUI/Main/sections/SeventhSection/SeventhSection.tsx";
import EighthSection  from "@pagesUI/Main/sections/EighthSection/EighthSection.tsx";
import NinthSection  from "@pagesUI/Main/sections/NinthSection/NinthSection.tsx";
import TenthSection  from "@pagesUI/Main/sections/TenthSection/TenthSection.tsx";
import EleventhSection  from "@pagesUI/Main/sections/EleventhSection/EleventhSection.tsx";
import TrialSectionNew  from "@pagesUI/Main/sections/TrialSectionNew/TrialSectionNew.tsx";
import BonusSection  from "@pagesUI/Main/sections/BonusSection/BonusSection.tsx";
import TwelfthSection  from "@pagesUI/Main/sections/TwelfthSection/TwelfthSection.tsx";
import FaqsSection  from "@pagesUI/Main/sections/FaqsSection/FaqsSection.tsx";
import Footer  from "@pagesUI/Main/sections/Footer/Footer.tsx";

export default function IndexPage() {
	return (
		<>
			<Header />
			<Announcing />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<SeventhSection />
			<EighthSection />
			<NinthSection />
			<TenthSection />
			<EleventhSection />
			<section id="sectionToScroll">
				<TrialSectionNew />
			</section>
			<BonusSection />
			<TwelfthSection />
			<TrialSectionNew />
			<FaqsSection />
			<Footer />
		</>
	);
}
