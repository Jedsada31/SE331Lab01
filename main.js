const app = Vue.createApp({
    data() {
        return {
            info: 'Use with your foot',
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            onSale: true,
            inventory: 10,
            details: ['50% cotton','30% wool','20% polyester'],
            sizes: ['S','M','L'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ],
            cart: 0
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateStock() {
            if(this.inStock == true){
                this.inStock = false
            } else {
                this.inStock = true
            }
        }
    }
})