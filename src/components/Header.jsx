import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';

export default function Header(){
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logoImg} alt="logo for the Food menu app" id='' />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Button textOnly>Cart(3)</Button>
            </nav>
        </header>
    );
}