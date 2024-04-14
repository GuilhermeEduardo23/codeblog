import { useFetch } from "../../hooks/useFetch";
useFetch;

const Card = () => {
    const url: string = "http://localhost:3000/posts";
    const {data, loading, error} = useFetch(url);

    if(error)
        return <p>Ocorreu um erro!</p>;

    if(loading)
        return <p>Carregando artigos...</p>

  return (
    <section style={{background: `blue`}}>
       {data?.map(item => (
        <article key={item.id}>
            <div>
                <p>{item.date}</p>
                <img src={item.icon}/>
            </div>
            <div>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
            </div>
        </article>
       ))}
    </section>
  )
}

export default Card