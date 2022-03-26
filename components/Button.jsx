import Link from 'next/link'
import styles from '../styles/componentsStyle/Button.module.scss'

const Button = ({
    title,
    url,
    isActive
}) => {
    return (
        <div className={styles.container}>
            <Link href={url} passHref>
                <a>
                    <div className={styles.button}>
                        {title}
                    </div>
                </a>
            </Link>
            <div className={isActive ? styles.active : styles.border}></div>
        </div>
    );
}

export default Button;
