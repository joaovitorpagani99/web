class MyComp extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        const template = `
        <style>
        .nav {
            border-bottom: 1px solid grey;
          }
          .nav__toggle {
            position: absolute;
            cursor: pointer;
            margin: 0rem 1rem;
            right: 0;
          }
          .close,
          input[type="checkbox"] {
            display: none;
          }
          .hamburger {
            margin-top: 0.2rem;
          }
          .nav__menu {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            margin: 1rem;
          }
          li {
            list-style: none;
            display: none;
          }
          
          .nav__menu a {
            text-decoration: none;
            color: initial;
            font-size: 1.2rem;
            color: black;
          }
          #item-menu:hover {
              color: blue;
              font-size: 1.4rem;
          }
          #nav__checkbox:checked ~ ul.nav__menu li {
            display: block;
          }
          #nav__checkbox:checked ~ label.nav__toggle .hamburger {
            display: none;
          }
          #nav__checkbox:checked ~ label.nav__toggle .close {
            display: block;
          }
          @media only screen and (min-width: 1080px) {
            .nav__toggle {
              display: none;
            }
            .nav__menu {
              flex-direction: row;
            }
            .nav__menu li {
              display: block;
            }
            .menu-item {
              padding-right: 50px;
            }
            .imglogo {
              height: unset;
              height: 100px;
            }
            .imglogo {
              height: 52px;
            }
          }
          @media only screen and (max-width: 1080px) {
            .nav__menu a {
              font-size: 2.2rem;
              color: black;
            }
            .imglogo {
              height: 80px;
              display: block;
            }
            .hamburger, .close {
              height: 64px;
            }
          }          
        </style>
        <slot>
        <nav class="nav">
            <input type="checkbox" id="nav__checkbox" class="nav__checkbox">
            <label for="nav__checkbox" class="nav__toggle">
            <img src="imagens/menu.png" class="hamburger" />
            <img src="imagens/back.png" class="close" />
            </label>
            <ul class="nav__menu">
            <li>
                <a href="index.html">
                <img class="imglogo" src="imagens/computer (1).png" />
                </a>
            </li>
            
            <li><a id="item-menu" href="index.html">Home</a></li>
            <li><a id="item-menu" href="ra-atual.html">RA Atualmente</a></li>
            <li><a id="item-menu" href="quiz.html">Quiz</a></li>
            <li class="menu-item"><a id="item-menu" href="atividades.html">Atividades</a></li>
            </ul>
        </nav>
        </slot>
        `
        
        this.shadow.innerHTML = template
        
    }
}

customElements.define('meu-menu', MyComp)