// Obiettivi
//
// (V) Creare uno slider a scorrimento contenente tutti i pianeti del sistema solare (preso spunto da un esercizio a lezione)
// (V) Per ogni pianeta, verranno visualizzati: nome, temperatura, satelliti, diametro equatoriale, periodo orbitale e velocità orbitale
// (V) L'utente ha la possibilità di scorrere i pianeti e visualizzare ogni caratteristica di essi 
// (V) Vedendo anche stampata una foto in pagina che corrisponde al pianeta attivo
// (V) Ci sarà poi una lista dei pianeti più piccola in alto, e anche lì l'active sarà evidenziato
// (V) Ci saranno 3 sfondi diversi a tema spazio, l'utente potrà cambiare sfondo quando vuole
// (V) Ogni pianeta deve avere una sezione "About"
// (X) Rifare con Vue

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',

        data: {
            
            // Active Object
            activeObject: 0,
            // Array di oggetti "Pianeta"
            solarSystem: [
                {
                    name: 'Mercury',
                    keysToShow: {
                        temperature: 166.85,
                        satellites: 0,
                        equatorialDiameter: 4879.4,
                        orbitalPeriod: 87.96,
                        orbitalSpeed: 47.36
                    },
                    image: 'img/mercurio.png',
                    info: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun\'s planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes.'
                },
                {
                    name: 'Venus',
                    keysToShow: {
                        temperature: 463.85,
                        satellites: 0,
                        equatorialDiameter: 12103.7,
                        orbitalPeriod: 	224.70,
                        orbitalSpeed: 35.02
                    },                    
                    image: 'img/venere.png',
                    info: 'Venus is the second closest planet to the Sun. It is referred to as Earth\'s sister planet due to its similar strcuture, size and mass. Although Venus is not the closest planet to the Sun (in which the title goes to Mercury), it is in fact the hottest. That\'s because Venus has a thick and dense atmosphere of carbon dioxide and sulphuric acid.'	
                },
                {
                    name: 'Earth',
                    keysToShow: {
                        temperature: 19.85,
                        satellites: 1,
                        equatorialDiameter: 12756.2,
                        orbitalPeriod: 365.25,
                        orbitalSpeed: 29.786
                    },                    
                    image: 'img/terra.png',
                    info: 'Earth (often referred to as "the earth" and in Latin known as Tellus) is third planet in the Solar System in terms of distance from the Sun, and the fifth in order of size. It is the only planet in the universe known to man to harbour life of any kind, as it is the mass of land and sea that humans live in. It is the only structure of it\'s kind known in the universe.'                    
                },
                {
                    name: 'Mars',
                    keysToShow: {
                        temperature: -87.15,
                        satellites: 2,
                        equatorialDiameter: 6804.9,
                        orbitalPeriod: 686.96,
                        orbitalSpeed: 24.131
                    },                    
                    image: 'img/marte.png',
                    info: 'Mars is a terrestrial planet, and is the fourth planet from the Sun. The high amounts of iron in its soil causes a red-orange color, which is why it is known as "the red planet". In Roman mythology, Mars was the god of war (taken from Greek mythology, Ares, the god of war) it is thought that the planet received this god\'s name because of its red color.'
                },
                {
                    name: 'Jupiter',
                    keysToShow: {
                        temperature: -121.15,
                        satellites: 79,
                        equatorialDiameter: 142984,
                        orbitalPeriod: 11.86,
                        orbitalSpeed: 13.070
                    },
                    image: 'img/giove.png',
                    info: 'Jupiter is the fifth planet from the Sun and the largest within the solar system. Jupiter and the other gas giants—Saturn, Uranus, and Neptune—are sometimes referred to as "Jovian planets." Jupiter is usually the fourth brightest object in the sky (after the Sun, the Moon and Venus); however at times Mars appears brighter than Jupiter.'
                },
                {
                    name: 'Saturn',
                    keysToShow: {
                        temperature: -130.15,
                        satellites: 82,
                        equatorialDiameter: 120536,
                        orbitalPeriod: 29.45,
                        orbitalSpeed: 9.672
                    },
                    image: 'img/saturno.png',
                    info: 'Saturn is the sixth planet from the Sun. It is a gas giant (also known as a Jovian planet, after the planet Jupiter), the second-largest planet in the Solar System after Jupiter. Saturn has a prominent system of rings, consisting mostly of ice particles with a smaller amount of rocky debris and dust. It was named after the Roman God Saturn (the Greek mythology equivalent is Kronos, father of Zeus).'
                },
                {
                    name: 'Uranus',
                    keysToShow: {
                        temperature: -205.15,
                        satellites: 27,
                        equatorialDiameter: 51118,
                        orbitalPeriod: 84.07,
                        orbitalSpeed: 6.836
                    },
                    image: 'img/urano.png',
                    info: 'Uranus is the seventh planet from the Sun. It is a gas giant, the third largest by diameter and fourth largest by mass. It is named after Uranus, the Greek god of the sky and progenitor of the other gods. Uranus is unique in that it was the first planet discovered in modern times.'
                },
                {
                    name: 'Neptune',
                    keysToShow: {
                        temperature: -220.15,
                        satellites: 14,
                        equatorialDiameter: 49528,
                        orbitalPeriod: 164.88,
                        orbitalSpeed: 5.478
                    },                    
                    image: 'img/nettuno.png',
                    info: 'Neptune is the eighth and last planet from the Sun in our solar system. It is an ice giant, as it has an outer layer of hydrogen, helium, methane, ammonia and water. Beneath this layer lies a thick mantle of chemical ices and a small core of rocky material. The atmosphere of Neptune is much stormier than Uranus\' with winds up to 1,250 mph (2,000 km/h). It\'s color is blue.'
                }
            ],
            // Array di classi background 
            activeBg: 0,
            changeThemeBtnBg: ['blue_sky_bg', 'purple_sky_bg', 'green_sky_bg'],
            // Array di contenuto testo bottoni
            changeThemeBtnText: ['blue', 'purple', 'green'],
            // Array di nome Keys fixati
            keysFixedNames: ['Temperature', 'Satellites', 'Equatorial Diameter', 'Orbital Period', 'Orbital Speed'],
            // Array di classi per le icone social
            numberOfIcons: 4,
            iconsClasses: ['fa-twitter', 'fa-facebook', 'fa-instagram', 'fa-linkedin-in'],
            sliderClock: null
        },

        methods:{

            increaseIndex: function(){
                this.activeObject = (this.activeObject < this.solarSystem.length - 1) ? this.activeObject + 1 : 0;
            },
            decreaseIndex: function(){
                this.activeObject = (this.activeObject > 0) ? this.activeObject - 1 : this.solarSystem.length - 1;
            },
            switchToClickedThumb: function(thisThumbIndex){
                this.activeObject = thisThumbIndex;
            }, 
            switchBg: function(thisIndex){
                this.activeBg = thisIndex;
            },
            autoSwitchSlider: function(){
                this.sliderClock = setInterval(() => {
                    this.increaseIndex();
                }, 3000);
            },
            stopAutoSwitchSlider: function(){
                clearInterval(this.sliderClock);
            }
        },

        created: function(){
            this.autoSwitchSlider();
        }
    }
);
                             















