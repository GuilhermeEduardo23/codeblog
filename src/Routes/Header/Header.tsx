import icon_search from "../../assets/icon_search.svg";

const Header = () => {
  return (
    <div>
        <h1>CodeBlog</h1>
        <div>
            <img src={icon_search}/>
            <input type="text" placeholder="Pesquisar no blog"/>
        </div>
    </div>
  )
}

export default Header