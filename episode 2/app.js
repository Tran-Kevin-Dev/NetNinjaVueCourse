const app = Vue.createApp({
  data() {
    return {
      url: "https://www.youtube.com/",
      showBooks: true,
      books: [
        {
          title: "Percy Jackson",
          author: "Rick Riordan",
          age: 47,
          img: "assets/berserk ends.png",
          isFav: true,
        },
        {
          title: "The lord of the rings",
          author: "RR tolkien",
          age: 80,
          img: "assets/8a7.png",
          isFav: false,
        },
        {
          title: "Crime & punishment",
          author: "dostievsky",
          age: 170,
          img: "assets/chitch.png",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    toggleFav(book) {
      book.isFav = !book.isFav  
    },

  },
  
  computed: {
    filteredBooks(){
      return this.books.filter((book) => book.isFav)
    }
  },

});

app.mount("#app");

console.log("hello world");
