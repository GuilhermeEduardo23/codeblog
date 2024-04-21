import { useFetch } from "../../hooks/useFetch";
useFetch;

import styles from "./Card.module.scss";

const Card = () => {
    const API_URL = import.meta.env.VITE_API_URL; 
    const {data, loading, error} = useFetch(API_URL);
    
    if(error)
        return <p>Ocorreu um erro!</p>;

    if(loading)
        return <div className={styles.loading}>
            <p>Carregando artigos...</p>
        </div>

  return (
    <section className={styles.cards}>
       {data?.map(item => (
        <article key={item.id} className={styles.card}>
            <div className={styles.information}>
                <p className={styles.date}>{item.date}</p>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9062 2.5C12.293 2.5 10.8805 3.19375 10 4.36641C9.11953 3.19375 7.70703 2.5 6.09375 2.5C4.80955 2.50145 3.57837 3.01223 2.6703 3.9203C1.76223 4.82837 1.25145 6.05955 1.25 7.34375C1.25 12.8125 9.35859 17.2391 9.70391 17.4219C9.79492 17.4708 9.89665 17.4965 10 17.4965C10.1033 17.4965 10.2051 17.4708 10.2961 17.4219C10.6414 17.2391 18.75 12.8125 18.75 7.34375C18.7486 6.05955 18.2378 4.82837 17.3297 3.9203C16.4216 3.01223 15.1904 2.50145 13.9062 2.5ZM10 16.1563C8.57344 15.325 2.5 11.5383 2.5 7.34375C2.50124 6.39101 2.88026 5.47765 3.55396 4.80396C4.22765 4.13026 5.14101 3.75124 6.09375 3.75C7.61328 3.75 8.88906 4.55938 9.42188 5.85938C9.46896 5.97401 9.54907 6.07205 9.65201 6.14105C9.75494 6.21005 9.87607 6.2469 10 6.2469C10.1239 6.2469 10.2451 6.21005 10.348 6.14105C10.4509 6.07205 10.531 5.97401 10.5781 5.85938C11.1109 4.55703 12.3867 3.75 13.9062 3.75C14.859 3.75124 15.7724 4.13026 16.446 4.80396C17.1197 5.47765 17.4988 6.39101 17.5 7.34375C17.5 11.532 11.425 15.3242 10 16.1563Z"/>
</svg>
            </div>
            <div className={styles.text}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
            </div>
        </article>
       ))}
    </section>
  )
}

export default Card