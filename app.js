const app = Vue.createApp({
  // data,

  data() {
    return {
      showBooks: true,
      title: "Percy Jackson",
      author: "Rick Riordan",
      age: 47,
      x: 0,
      y: 0,
    };
  },
  methods: {

    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    
    handleEvent(e , data){
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },

    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    // changeTitle(title) {
    //     // this.title = "Can't hurt me"
    //     this.title = title 
    // },
  },
});

app.mount("#app");

console.log("hello world");
