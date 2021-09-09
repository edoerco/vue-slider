// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// * Creare il navigatore in basso con i pallini bianchi (blu se corrispondente all'immagine attualmente visualizzata)
// * Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

const app = new Vue({
    el: '#root',
    data: {
        counterPhoto: 0,
        photos: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg'
        ],
        timer: 0,
        playVisible: true,
        idInterval: null
    },
    // mounted() {
    //     this.startRotation();

    //     document.addEventListener('keydown', (e) => {
    //         if(e.key == 'ArrowRight') {
    //             this.nextPhoto();
    //         } else if (e.key == 'ArrowLeft') {
    //             this.prevPhoto();
    //         }
    //     })
    // },
    methods: {
        prevPhoto(){
            this.counterPhoto -= 1;
            if(this.counterPhoto < 0) this.counterPhoto = (this.photos.length - 1);
        },
        nextPhoto(){
            this.counterPhoto += 1;
            if(this.counterPhoto == (this.photos.length)) this.counterPhoto = 0;
        },
        startRotation() {   
            // setInterval(funzione, secondi * 1000)
            this.timer = setInterval(this.nextPhoto, 3000);
        },
        toggleVisibility() {
            this.playVisible = !this.playVisible;
            this.startStopSlider();
        },
        startStopSlider() {
            if(this.playVisible) {
                setInterval (() => { this.nextPhoto()}, 3000)
            } else {
                clearInterval(this.idInterval);
            }
        },
        changePhoto(index) {
            this.counterPhoto = index;
        }
        
    },
})