

import Link from "next/link"
import styles from "../../../styles/footer.module.scss"



const LinkItem = ({link, title} : {link: string, title: string}) => {

    return  <li className={styles.footer__list__item}>
    <Link href={link}   className={styles.footer__list__item__link}>
            {title}  
    </Link>
</li>
}


const FooterLinks = () => {




    return <ul className={styles.footer__list}>
    <LinkItem title="Политика использования файлов cookie" link="/cookie-policy" />
    <LinkItem title="Политика конфиденциальности" link="/privacy-policy" />
    <LinkItem title="Политика обработки персональных данных" link="/personal-data-policy" />
    <LinkItem title="Согласие на обработку персональных данных клиентов - физических лиц" link="/personal-data-of-clients" />
   
    {/* <li className={styles.footer__list__item}>
        <Link href="/cookie-policy" 
                className={
                    styles.footer__list__item__link
                }
            >
                Политика использования файлов cookie
           
        </Link>
    </li> */}
     {/* <li className={styles.footer__list__item}>
        <Link href="/privacy-policy" 
                className={
                    styles.footer__list__item__link
                }
            >
                Политика конфиденциальности
           
        </Link>
    </li> */}
    {/* <li className={styles.footer__list__item}>
        <Link
            href="/personal-data-policy"
         
                className={
                    styles.footer__list__item__link
                }
            >
                Политика обработки персональных
                данных
           
        </Link>
    </li> */}
    {/* <li className={styles.footer__list__item}>
        <Link
            href="/personal-data-of-clients"
            
                className={
                    styles.footer__list__item__link
                }
            >
                Согласие на обработку персональных
                данных клиентов - физических лиц
        
        </Link>
    </li> */}
</ul>
}

export default FooterLinks