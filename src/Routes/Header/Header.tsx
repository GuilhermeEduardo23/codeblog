import "./Header.module.scss";

import icon_search from "/src/assets/icon_search.png";

const Header = () => {
  return (
    <header>
        <h1>Code<span>Blog</span></h1>
        <div>
            <img src={icon_search}/>
            <input type="text" placeholder="Pesquisar no blog"/>
        </div>
    </header>
  )
}

export default Header