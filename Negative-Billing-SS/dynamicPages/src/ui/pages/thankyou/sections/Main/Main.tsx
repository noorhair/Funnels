import styles from "./Main.styles.module.scss";

import logo from "@images/logo.svg";
import thanYouStar from "@images/thanYouStar.svg";

export default function ThankYou() {
  return (
    <div className={styles.thank_root}>
        <div className={styles.logo_container}>
            <img src={logo} alt="" />
        </div>

        <div className={styles.content}>

            <div className={styles.checked_container}>
                <img src={thanYouStar} alt="" />
                <p>THANK YOU FOR YOUR ORDER</p>
            </div>

            <div className={styles.paragraphs}>
                <p>Hello there! It's Angela, from the Noor family.</p>
                <p>A heartfelt thank you for bringing Noor into your life!</p>
                <p>We're so over the moon that you're willing to trust us with your hair. 🌟</p>
                <p>The reason I created Noor Hair is because I was losing my hair, and my identity with it, and I needed a solution I could trust. Since I couldn’t find one, I did the research to create one.</p>
                <p>Our goal is to support as many women as we can like yourself, get lustrous, thick and healthy hair… and trust us, you're going to be thrilled with the results!</p>
                <p>Here's some exciting news: you're in great company!</p>
                <p><b>More than +80,000 amazing women just like you have chosen Noor to nourish their locks to health and happiness.</b></p>
            </div>

            <div className={styles.images_container}>
                <img src="https://assets.checkoutchamp.com/Funnel/assets/images/61981a7f-e4ae-4028-be7b-a1e443a39681/e2300f7b-0878-4e09-a117-ad07f6751a03/1698495998-3_4.png?versionId=h_DT3.21cUC.7AvoiYfad4dvPWa6j46A" alt="" />
                <img src="https://assets.checkoutchamp.com/Funnel/assets/images/61981a7f-e4ae-4028-be7b-a1e443a39681/e2300f7b-0878-4e09-a117-ad07f6751a03/1700698447-Copy_of_Discover_the_Simple___Powerful_l_Island-Spice_Hair_Growth_Remedy__2___1___1_.png?versionId=fChcHsXhDy0c_xSVJ83fpCOCVu7abBGy" alt="" />
            </div>

            <div className={styles.paragraphs}>
                <p><b>Think of it as becoming part of a warm community where everyone's goal is to turn hair woes into hair wows!</b></p>
                <p><b>Now, about your order – our dedicated warehouse squad is on top of it, and they'll dispatch it swiftly!</b></p>
                <p>All of our shipments are sent out from our warehouse in Tampa, Florida.</p>
                <p>Expect your package within about 5 days.</p>
                <p><b>Keep an eye on your inbox for an email from us with all the details about your order, and how to use your products, followed by another email that lets you track your package as it makes its way to you.</b></p>
                <p>Now, let’s dive into your hair care journey. The key here is CONSISTENCY!</p>
                <p>Embrace your Noor ritual every day and you may notice less thinning in just the first week. ✅</p>
                <p>Continue the routine, and by week three, not only you could see less shedding and thinning but your now nourished scalp could begin sprouting new, more healthy and vibrant hair.✅</p>
                <p>Come week 6, prepare for the wow-factor – we're talking stronger, more radiant head.✅</p>
                <p><b>Stay the course, and in a few months, don't be surprised if you're getting asked, "What's your hair care secret?"</b></p>
                <p>If any questions pop up, don't hesitate to reach out.</p>
                <p>Drop us an email at <b><u>angela@noorhairofficial.com</u></b> or give us a call at <b>(510) 605-3796</b> - we're all ears and eager to assist!</p>
                <p>And a little surprise for you – P.S. we've got some fabulous new hair treats, like a potent Hair Mask treatment and nourishing Keratin products. And because you've made a purchase today, </p>
                <p>You've unlocked a special 15% discount on your next order.</p>
                <p>Simply <a href="https://noorhairofficial.com/">click here</a> and punch in the code WELCOME15 at checkout to enjoy 15% off on our entire range!</p>
            </div>
        </div>
     
    </div>
  )
}
