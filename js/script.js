const {createApp} = Vue;

createApp({
    data(){
        return{
            images: [
                {
                    image: './img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 

                {
                    image: './img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 

                {
                    image: './img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },

                {
                    image: './img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                
                {
                    image: './img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            wrapper: 'c92Wrapper bg-dark d-flex',
            container: 'c92Box c92mAuto c92BorderRadius d-flex',
            boxleft: 'c92BoxLeft c92BorderRadiusLeft',
            boxright: 'c92BoxRight c92BorderRadiusRight',
            btnUp: 'c92Btn c92BtnTop btn btn-outline-warning',
            iconUp: 'fa-solid fa-arrow-up',
            btnDown: 'c92Btn c92BtnBot btn btn-outline-warning',
            iconDown: 'fa-solid fa-arrow-down',
            currentImg: 0,

        }
    },
    methods: {
            
    }
}).mount('#app');