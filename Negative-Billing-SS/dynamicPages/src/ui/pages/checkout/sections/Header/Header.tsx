import styles from "./Header.styles.module.scss";

export default function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.content}>
                <a href="https://noorhairofficial.com/">
                    <img src="https://noorhairofficial.com/cdn/shop/files/Vector_1.svg?v=1702272433&width=168" alt="noor_logo" />
                </a>
            </div>
        </div>
    )
}