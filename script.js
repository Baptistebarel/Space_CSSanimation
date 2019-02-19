/**********
  Canvas arc
***********/


let arc1 = document.querySelector( ".arc1" );
let ctx = arc1.getContext("2d");
ctx.lineWidth = 10;

ctx.beginPath();
ctx.arc(100,100,60,Math.PI-4.1,0,false);
ctx.strokeStyle = '#2ecc71';
ctx.stroke();

let arc2 = document.querySelector( ".arc2" );
let ctx2 = arc2.getContext("2d");
ctx2.lineWidth = 10;

ctx2.beginPath();
ctx2.arc(100,100,60,Math.PI-5.5,0,false);
ctx2.strokeStyle = "#663399";
ctx2.stroke();

let arc3 = document.querySelector( ".arc3" );
let ctx3 = arc3.getContext("2d");
ctx3.lineWidth = 10;

ctx3.beginPath();
ctx3.arc(100,100,60,Math.PI-6.1,0,false);
ctx3.strokeStyle = "#86e2d5";
ctx3.stroke();

/***********
  input
***********/

function input(){
    let texte = document.querySelector('.matricule').value
    return 'Welcome ' + texte
}

const button = document.querySelector('.start')
const txt_welcome = document.querySelector('.welcome')

button.addEventListener('click', () =>
{
    txt_welcome.appendChild(document.createTextNode(input()));
    let backg = document.querySelector('.background');
    backg.style.visibility = "hidden";
    let form = document.querySelector('.name');
    form.style.visibility = "hidden";
})


/** Planet **/

const planet1 = document.querySelector('.main_sphere .planet1')
const planet2 = document.querySelector('.main_sphere .planet2')
const planet3 = document.querySelector('.main_sphere .planet3')
const planet4 = document.querySelector('.main_sphere .planet4')
const planet5 = document.querySelector('.main_sphere .planet5')

/** Menu **/

const flight = document.querySelector('.rectangle_flight')
const weather = document.querySelector('.rectangle_weather')
const data = document.querySelector('.rectangle_data')
const target = document.querySelector('.rectangle_target')

/** Changing elements **/

const load_line = document.querySelector('.rectangle_flight .bar2')
const radar_shadow = document.querySelector('.rectangle_data .dashboard .radar .shadow')
const sphere = document.querySelector('.rectangle_target .circle')
const cross = document.querySelector('.close_menu')

/** Text **/

let hours = document.querySelector('.rectangle_flight span.hour')
let air = document.querySelector('.rectangle_weather span.air')
let temperature = document.querySelector('.rectangle_weather span.temperature')
let planet_name = document.querySelector('.rectangle_target span.planet_name')

/** Meteo **/

const sun = document.querySelector('.rectangle_weather .climate .sun')
const clouds = document.querySelector('.rectangle_weather .climate .clouds')
const rain = document.querySelector('.rectangle_weather .climate .clouds_rain')
const lightning = document.querySelector('.rectangle_weather .climate .lightning')

/** Composition **/

const solid = document.querySelector('.rectangle_target span.solid')
const gaz = document.querySelector('.rectangle_target span.gaz')


planet1.addEventListener('click', () =>
{
    if(flight.classList.contains('open') && weather.classList.contains('open') && target.classList.contains('open') && data.classList.contains('open') )
     {
        load_line.classList.remove('planet5_change', 'planet2_change', 'planet3_change', 'planet4_change')
        radar_shadow.classList.remove('planet5_change', 'planet2_change', 'planet3_change', 'planet4_change')
        sphere.classList.remove('planet5_change', 'planet2_change', 'planet3_change', 'planet4_change')
        load_line.classList.add('planet1_change')
        radar_shadow.classList.add('planet1_change')
        sphere.classList.add('planet1_change')
        hours.innerHTML = "11 days left"
        air.innerHTML = "NO C02"
        temperature.innerHTML = "140°F"
        planet_name.innerHTML = "Lyncis"
        sun.style.display = "flex"
        clouds.style.display = "none"
        rain.style.display = "none"
        lightning.style.display = "none"
        solid.classList.remove('active')
        gaz.classList.add('active')
     }
    else
     {
        load_line.classList.add('planet1_change')
        radar_shadow.classList.add('planet1_change')
        sphere.classList.add('planet1_change')
        flight.classList.add('open')
        weather.classList.add('open')
        data.classList.add('open')
        target.classList.add('open')
        cross.classList.add('open')
        solid.classList.remove('active')
        gaz.classList.add('active')
     }
})

planet2.addEventListener('click', () =>
{
    if(flight.classList.contains('open') && weather.classList.contains('open') && target.classList.contains('open') && data.classList.contains('open') )
    {
        load_line.classList.remove('planet5_change', 'planet1_change', 'planet3_change', 'planet4_change')
        radar_shadow.classList.remove('planet5_change', 'planet1_change', 'planet3_change', 'planet4_change')
        sphere.classList.remove('planet5_change', 'planet1_change', 'planet3_change', 'planet4_change')
        load_line.classList.add('planet2_change')
        radar_shadow.classList.add('planet2_change')
        sphere.classList.add('planet2_change')
        hours.innerHTML = "32 days left"
        air.innerHTML = "C02"
        temperature.innerHTML = "18°F"
        planet_name.innerHTML = "Alpha 3A"
        sun.style.display = "none"
        clouds.style.display = "none"
        rain.style.display = "flex"
        lightning.style.display = "none"
        solid.classList.add('active')
        gaz.classList.remove('active')
    }
   else
    {
       load_line.classList.add('planet2_change')
       radar_shadow.classList.add('planet2_change')
       sphere.classList.add('planet2_change')
       flight.classList.add('open')
       weather.classList.add('open')
       data.classList.add('open')
       target.classList.add('open')
       cross.classList.add('open')
       solid.classList.add('active')
       gaz.classList.remove('active')
    }
})

planet3.addEventListener('click', () =>
{
    if(flight.classList.contains('open') && weather.classList.contains('open') && target.classList.contains('open') && data.classList.contains('open') )
    {
        load_line.classList.remove('planet5_change', 'planet2_change', 'planet1_change', 'planet4_change')
        radar_shadow.classList.remove('planet5_change', 'planet2_change', 'planet1_change', 'planet4_change')
        sphere.classList.remove('planet5_change', 'planet2_change', 'planet1_change', 'planet4_change')
        load_line.classList.add('planet3_change')
        radar_shadow.classList.add('planet3_change')
        sphere.classList.add('planet3_change')
        hours.innerHTML = "1 month left"
        air.innerHTML = "C02"
        temperature.innerHTML = "-80°F"
        planet_name.innerHTML = "Cancri 34"
        sun.style.display = "none"
        clouds.style.display = "flex"
        rain.style.display = "none"
        lightning.style.display = "none"
        solid.classList.add('active')
        gaz.classList.remove('active')
    }
   else
    {
       load_line.classList.add('planet3_change')
       radar_shadow.classList.add('planet3_change')
       sphere.classList.add('planet3_change')
       flight.classList.add('open')
       weather.classList.add('open')
       data.classList.add('open')
       target.classList.add('open')
       cross.classList.add('open')
       solid.classList.add('active')
       gaz.classList.remove('active')
    }
})

planet4.addEventListener('click', () =>
{
    if(flight.classList.contains('open') && weather.classList.contains('open') && target.classList.contains('open') && data.classList.contains('open') )
    {
        load_line.classList.remove('planet5_change', 'planet2_change', 'planet3_change', 'planet1_change')
        radar_shadow.classList.remove('planet5_change', 'planet2_change', 'planet3_change', 'planet1_change')
        sphere.classList.remove('planet5_change', 'planet2_change', 'planet3_change', 'planet1_change')   
        load_line.classList.add('planet4_change')
        radar_shadow.classList.add('planet4_change')
        sphere.classList.add('planet4_change')
        hours.innerHTML = "4 months left"
        air.innerHTML = "NO C02"
        temperature.innerHTML = "40°F"
        planet_name.innerHTML = "Arietis B"
        sun.style.display = "none"
        clouds.style.display = "none"
        rain.style.display = "none"
        lightning.style.display = "flex"
        solid.classList.remove('active')
        gaz.classList.add('active')
    }
   else
    {
       load_line.classList.add('planet4_change')
       radar_shadow.classList.add('planet4_change')
       sphere.classList.add('planet4_change')
       flight.classList.add('open')
       weather.classList.add('open')
       data.classList.add('open')
       target.classList.add('open')
       cross.classList.add('open')
       solid.classList.remove('active')
       gaz.classList.add('active')
    }
})

planet5.addEventListener('click', () =>
{
    if(flight.classList.contains('open') && weather.classList.contains('open') && target.classList.contains('open') && data.classList.contains('open') )
    {
        load_line.classList.remove('planet1_change', 'planet2_change', 'planet3_change', 'planet4_change')
        radar_shadow.classList.remove('planet1_change', 'planet2_change', 'planet3_change', 'planet4_change')
        sphere.classList.remove('planet1_change', 'planet2_change', 'planet3_change', 'planet4_change')
        load_line.classList.add('planet5_change')
        radar_shadow.classList.add('planet5_change')
        sphere.classList.add('planet5_change')
        hours.innerHTML = "3 days left"
        air.innerHTML = "NO C02"
        temperature.innerHTML = "90°F"
        planet_name.innerHTML = "Xaron"
        sun.style.display = "none"
        clouds.style.display = "none"
        rain.style.display = "none"
        lightning.style.display = "flex"
        solid.classList.remove('active')
        gaz.classList.add('active')
    }
   else
    {
       load_line.classList.add('planet5_change')
       radar_shadow.classList.add('planet5_change')
       sphere.classList.add('planet5_change')
       flight.classList.add('open')
       weather.classList.add('open')
       data.classList.add('open')
       target.classList.add('open')
       cross.classList.add('open')
       solid.classList.remove('active')
       gaz.classList.add('active')
    }
})


cross.addEventListener('click', () =>
{
    flight.classList.remove('open')
    weather.classList.remove('open')
    data.classList.remove('open')
    target.classList.remove('open')
    cross.classList.remove('open')
})

