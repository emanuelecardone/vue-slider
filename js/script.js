Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',

        data: {
            activeObject: 0,
            sliderObjects: [
                {
                    image: 'img/01.jpg',
                    alt: 'Immagine della Svezia',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image: 'img/02.jpg',
                    alt: 'Immagine della Svizzera',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'
                },
                {
                    image: 'img/03.jpg',
                    alt: 'Immagine della Gran Bretagna',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/04.jpg',
                    alt: 'Immagine della Germania',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                },
                {
                    image: 'img/05.jpg',
                    alt: 'Immagine di un\'isola',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
            ]
        },

        methods: {
            // Funzione che incrementa l'activeObject di 1 (legata al click di down arrow)
            increaseIndex: function(){
                this.activeObject = (this.activeObject < this.sliderObjects.length - 1) ? this.activeObject + 1 : 0;
            },
            // Funzione che decrementa l'activeObject di 1 (legata al click di up arrow)
            decreaseIndex: function(){
                this.activeObject = (this.activeObject > 0) ? this.activeObject - 1 : this.sliderObjects.length - 1;
            },
            // Funzione che cambia l'activeObject con l'indice (preso come parametro dall'html) corrispondente alla thumb che clicko
            switchToThisIndex: function(thisIndex){
                console.log(thisIndex);
                this.activeObject = thisIndex;
            }
        }

    }
);

