<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CIT-112 Project</title>
    <link rel="icon" type="image/png" href="favicon.ico">
    <link rel="stylesheet" href="CIT112-Project.css">
    <script src="CIT112-Project.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?
    family=work+sans:wght@300;400;500;600;700;800;900&display=swap">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="use-credentials">
<!--
    Mohammed Khalil 202110492
    2023/10/31
    Login and Sign Up - Search - Get Started are liked work
-->
<style>
  /*
   ( Ahmed 202110351 )
    2023/10/30 
*/
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: 'work sans', sans-serif;
}

:root{
    --h1-font: 5rem;
    --h2-font: 2.9rem;
    --p-font: 1.1rem;

    --bg-color: #121b25;
    --text-color: #ffffff;
    --main-color: #1aa090;
    --other-color: #d6d6d6;
}
body{
    background: var(--bg-color);
    color: var(--text-color);
}
header{
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    padding: 30px 15%;
    transition: all .50s ease;
}
.logoes img{
    height: auto;
    width: 100%;
}
#navbar{
    display: flex;
}
#navbar a{
    padding: 10px 25px;
    font-size: var(--p-font);
    font-weight: 400;
    color: var(--other-color);
    transition: all .40s ease;
}
#navbar a:hover{
    color: var(--text-color);
}
.h-btn{
    display: flex;
    align-items: center;
}
#hi-loe2{
    display: inline-block;
    padding: 10px 18px;
    background: var(--main-color);
    color: var(--text-color);
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px;
    transition: all .40s ease;
}
#hi-loe1{
    color: var(--other-color);
    font-weight: 500;
    font-size: 18px;
}
#hi-loe2:hover{
    transform: translateX(-7px);
}
#menu-icones{
    color: var(--text-color);
    font-size: 36px;
    margin-left: 5px;
    z-index: 10001;
    cursor: pointer;
    display: none;
}
section{
    padding: 80px 15% 70px;
}
.homey{
    position: relative;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 4.5rem;

}
.homey-texting h1{
    font-size: var(--h1-font);
    line-height: 1.2;
    margin-bottom: 20px;
}
.homey-texting p{
    font-size: var(--p-font);
    color: var(--other-color);
    line-height: 30px;
    margin-bottom: 2.5rem;
}
#how-search form{
    position: relative;
    width: 410px;
    max-width: 100%;
}
#how-search form input:first-child{
    display: inline-block;
    width: 100%;
    padding: 17px 130px 16px 15px;
    border: 2px solid var(--main-color);
    border-radius: .70rem;
}
#how-search form input:last-child{
    position: absolute;
    display: inline-block;
    padding: 12px 30px;
    background: var(--main-color);
    color: var(--text-color);
    font-size: 14px;
    cursor: pointer;
    border-radius: .70rem;
    box-shadow: 0px 0px 5px #fff, 0px 0px 15px #868686;
    top: 6px;
    right: 6px;
}
.homey-imge{
    width: 640px;
    height: 640px;
}
.homey-imge img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

header.sticky{
    padding: 8px 15%;
    background: #101821;
}
#featureuom{
    padding: 60px 15% 50px;
}
.c-left h2{
    font-size: var(--h2-font);
}
#featureuom-contenting{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 4rem;
}
.FF img{
    width: 100%;
    height: auto;
}

#propertios-contenting{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 4.5rem;
}
.rowue{
    position: relative;
    cursor: pointer;
}
.rowue img{
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}
.rowue h5{
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 10px;
}
.rowue p{
    font-size: var(--p-font);
    color: var(--other-color);
    margin-bottom: 20px;
}
.list{
    display: flex;
    align-items: center;
    gap: 2rem;
}
.list a{
    color: var(--text-color);
    font-size: var(--p-font);
}
.Res-li i{
    font-size: 18px;
    color: var(--main-color);
}
#center{
    text-align: center;
    margin-top: 4rem;
}
.b{
    display: inline-block;
    padding: 18px 28px;
    background: var(--main-color);
    color: var(--text-color);
    font-size: 17px;
    font-weight: 500;
    transition: all .50s ease;
}
.b:hover{
    transform: translateY(-7px) scale(0.9);
}

#abouter{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 4.5rem;
}
.abouter-imge img{
    height: auto;
    width: 100%;
}
.abouter-texting h2{
    font-size: var(--h1-font);
    margin-bottom: 25px;
}
.abouter-texting p{
    font-size: var(--p-font);
    color: var(--other-color);
    line-height: 30px;
    margin-bottom: 50px;
}

.subscribey-contenting{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: url(ss.jpg);
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    padding: 6rem 2rem;
}
.subscribey-contenting h2{
    font-size: var(--h1-font);
    margin-bottom: 12px;
}
.subscribey-contenting p{
    font-size: var(--p-font);
    line-height: 30px;
    margin-bottom: 27px;
}

#contacter{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 2rem;
}
.contactt-contentt h4{
    margin-bottom: 1.5rem;
    font-size: 20px;
}
.contactt-contentt li{
    margin-bottom: 16px;
}
.contactt-contentt li a{
    display: block;
    color: var(--other-color);
    font-size: 15px;
    font-weight: 400;
    transition: all .45s ease;
}
.contactt-contentt li a:hover{
    transform: translateY(-3px) translateX(-5px);
    color: var(--text-color);
}
.contactt-contentt p{
    color: var(--other-color);
    font-size: var(--p-font);
    line-height: 30px;
    margin: 30px 0;
}
.iconsion a{
    display: inline-block;
    font-size: 22px;
    color: var(--other-color);
    margin-right: 17px;
    transition: all .45s ease;
}
.iconsion a:hover{
    transform: translateY(-3px);
    color: var(--text-color);
}

@media (max-width: 1790px){
    header{
        padding: 18px 6%;
    }
    section{
        padding: 70px 6% 60px;
    }
    header.sticky{
        padding: 7px 6%;
    }
    #featureuom{
        padding: 40px 6% 30px;
    }
}

@media (max-width: 1425px){
    :root{
        --h1-font: 4.5rem;
        --h2-font: 2.6rem;
        --p-font: 1rem;
    }
    .homey-imge{
        width: 540px;
        height: 540px;
    }
    .homey-imge img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    header{
        padding: 15px 5%;
    }
    section{
        padding: 70px 5% 60px;
    }
    header.sticky{
        padding: 7px 5%;
    }
    #featureuom{
        padding: 40px 5% 30px;
    }
}

@media (max-width: 1170px){
    #menu-icones{
        display: block;
    }
    #navbar{
        position: absolute;
        top: 100%;
        right: 0;
        width: 270px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background: #101821;
        padding: 20px 15px;
        gap: 0.5rem;
        text-align: left;
        transition: all .50s ease;
        margin-top: -1.4em;
        margin-right: -63.4px;
    }
    #navbar a{
        display: block;
        font-size: 20px;
        padding: 15px;
    }
    #navbar.open{
        right: 0;
    }
    :root{
        --h1-font: 4rem;
        --h2-font: 2rem;
        --p-font: 1rem;
    }
    .homey{
        grid-template-columns: 1fr;
        gap: 1rem;
        height: 120vh;
    }
    .homey-texting{
        order: 2;
        width: 100%;
        max-width: 900px;
    }
    .homey-imge{
        width: 480px;
        height: 480px;
        margin: 0 auto;
        padding-top: 20px;
    }
    #abouter{
        grid-template-columns: 1fr;
    }
}

@media (max-width: 570px){
    :root{
        --h1-font: 3.4rem;
        --h2-font: 2rem;
        --p-font: 15px;
    }
    .homey{
        gap: 15px;
        height: 110vh;
    }
    .homey-imge{
        width: 400px;
        height: 400px;
        padding-top: 10px;
    }
    .subscribey-contenting{
        padding: 4rem 1rem;
    }
}
</style>
<script>
  //Feras 202220214
//2023/11/1
  
  const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menu = document.querySelector('#menu-icones');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    menu.classList.toggle('bx bx-menu');
    navbar.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx bx-menu');
    navbar.classList.remove('open')
};

  const navbarToggle = navbar.querySelector("#menu-icones");
const navbarMenu = document.querySelector("#menu-icones");
const navbarLinksContainer = navbarMenu.querySelector("#navbar");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);
<script>
</head>
<body>
    <header>
        <a href="#" class="logoes">
            <img src="Iconweb.png" alt="logo">
        </a>

        <ul id="navbar" class=".h-btn">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Buying</a></li>
            <li><a href="#">Renting</a></li>
            <li><a href="#">Selling</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
            <div>
            <a href="Pro3.html" id="hi-loe1">Login</a>
            <a href="Pro3.html" id="hi-loe2">Sign Up</a>
            <div class="bx bx-menu" id="menu-icones"></div>
        </div>
        
    </header>

    <section class="homey">
        <div class="homey-texting">
            <h1>Your House is Waiting For You!</h1>
            <p>The house of life, nor the bed of real estate, which is worth the price
                easy An urn, a mass of some kind. AC, pregnant
                I don't need it, I don't need it.</p>

               <div id="how-search">
                <form action="Pro.html">
                    <input type="search" placeholder="search by location..."
                    class="search-input" id="a1" name="a1">
                    <input type="submit" value="search">
                </form>
               </div>
        </div>

        <div class="homey-imge">
            <img src="House.png" alt="hero">
        </div>
    </section>

    <section id="featureuom"> 
        <div class="c-left">
            <h2>Feature In</h2>
        </div>
        <div id="featureuom-contenting">
            <div class="FF">
            <img src="f1.png" alt="f1">
            </div>

        <div class="FF">
            <img src="f2.png" alt="f2">
        </div>

        <div class="FF">
            <img src="f3.png" alt="f3">
        </div>

        <div class="FF">
            <img src="f4.png" alt="f4">
        </div>

        <div class="FF">
            <img src="f5.png" alt="f5">
        </div>

        </div>
    </section>

<section id="propertios">
    <div class="c-left">
        <h2>Popular Residence</h2>
    </div>

    <div id="propertios-contenting">
        <div class="rowue">
            <img src="p1.png" alt="p1">
            <h5>Aliva Private Jalving</h5>
            <p>1090 Pin Oak Drive, Clinton, USA</p>
            <div class="list">
            <a href="#" class="Res-li">
                <i class="bx bx-bed"></i>
                4 Bed
            </a>

            <a href="#" class="Res-li">
                <i class="bx bx-bath"></i>
                2 Bath
            </a>

            <a href="#" class="Res-li">
                <i class="bx bx-shape-square"></i>
                1203 Sq,ft
            </a>

            </div>
        </div>

        <div class="rowue">
            <img src="p2.png" alt="p1">
            <h5>Aliva Private Jalving</h5>
            <p>1090 Pin oak Drive, Clinton, USA</p>
            <div class="list">
            <a href="#" class="Res-li">
                <i class="bx bx-bed"></i>
                4 Bed
            </a>

            <a href="#" class="Res-li">
                <i class="bx bx-bath"></i>
                2 Bath
            </a>

            <a href="#" class="Res-li">
                <i class="bx bx-shape-square"></i>
                1203 Sq,Ft
            </a>

            </div>
        </div>

        <div class="rowue">
            <img src="p3.png" alt="p1">
            <h5>Aliva Private Jalving</h5>
            <p>1090 Pin oak Drive, Clinton, USA</p>
            <div class="list">
            <a href="#" class="Res-li">
                <i class="bx bx-bed"></i>
                4 Bed
            </a>

            <a href="#" class="Res-li">
                <i class="bx bx-bath"></i>
                2 Bath
            </a>

            <a href="#" class="Res-li">
                <i class="bx bx-shape-square"></i>
                1203 Sq,Ft
            </a>

            </div>
        </div>
    </div>

    <div id="center">
    <a href="#" class="b">View All Properties</a>
    </div>
</section>

<section id="abouter">
    <div class="abouter-imge">
        
        <img src="Group 1.png" alt="G1">
    </div>

    <div class="abouter-texting">
        <h2>We Help People To Find Homes</h2>
        <p>The mausoleum until it bursts into flames. Pure medical treatment
            the airline will collect the mass. No, the vestibule is different
            great and In football, he just promoted soccer. Nibh
            Who wants to have a career? It flatters some until but
            Morbi homework needs a cartoon porta id policy.</p>
        <a href="#" class="b">Get In Touch</a>
    </div>
</section>

<section class="subscribey">
    <div class="subscribey-contenting">
        <h2>Let's simply Being With !&TEAM EIGHT&@.</h2>
        <p>Neck, vestibulum sed various
            magna and at. Me, adipiscing morbi augue just. Nibh
            laoreet volutpat quis velit. Mixed aliquam donec sed
            Morbi Congue Eget Lorem Nursery Gate ID Lobortis.</p>
        <a href="Pro2.html" class="b">Get Started</a>
    </div>
</section>

<section id="contacter">
    <div class="contactt-contentt">
        <img src="Iconweb.png" alt="logo">
        <p>No, the vestibule is large and large. Football
            adipiscing disease promotion.</p>
        <div class="iconsion">
            <a href="https://twitter.com/?lang=ar"><i class="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://twitter.com/?lang=ar"><i class="bx bxl-twitter"></i></a>
            <a href="https://www.youtube.com/"><i class="bx bxl-youtube"></i></a>
        </div>
    </div>

    <div class="contactt-contentt">
        <h4>Projects</h4>
        <li><a href="#">Houses</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">Flats</a></li>
        <li><a href="#">Appartment</a></li>
    </div>

    <div class="contactt-contentt">
        <h4>Projects</h4>
        <li><a href="#">Houses</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">Flats</a></li>
        <li><a href="#">Appartment</a></li>
    </div>

    <div class="contactt-contentt">
        <h4>Projects</h4>
        <li><a href="#">Houses</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">Flats</a></li>
        <li><a href="#">Appartment</a></li>
    </div>

    <div class="contactt-contentt">
        <h4>Projects</h4>
        <li><a href="#">Houses</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">Flats</a></li>
        <li><a href="#">Appartment</a></li>
    </div>
</section>
</body>
</html>
