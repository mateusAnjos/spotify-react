import './Header.css'
import smallRight from '../../assets/icons/small-right.png'
import smallLeft from '../../assets/icons/small-left.png'
import search from '../../assets/icons/search.png'

const Header = ()=>{
    return(
        <div>
            <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeft} alt="" />
                    </button>
                    <button className="arrow-right">
                        <img src={smallRight} alt="" />
                    </button>
                </div>
                <div className="header__search">
                    <img src={search} alt="" />
                    <input id="search-input" maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                        placeholder="O que você quer ouvir?" value="" />
                </div>
                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
        </div>
    )
}

export default Header