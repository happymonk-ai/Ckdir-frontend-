import Link from 'next/link'
import styles from '../styles/componentsStyle/Button.module.scss'

const Button = ({
    title,
    url
}) => {
    return (
        <div className={styles.container}>
            <Link href={url}>
                <a>
                    <div className={styles.button}>
                        {title}
                    </div>
                </a>
            </Link>
            <div className={styles.border}></div>
        </div>
    );
}

export default Button;
