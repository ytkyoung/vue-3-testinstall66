<template>
  <div class="title">
    <div class="container">
      <!-- attribute binding -->
      <!-- <div class="box box7">
        <a :href="url">edabit</a>
      </div> -->

      <div class="box box2">
        <ul>
          <li
            v-for="book in books"
            :key="book.id"
            :class="{ fav: book.isFav }"
            @click="toggleFav(book)"
          >
            <h3>{{ book.title }}</h3>
            <img :src="book.img" :alt="book.title" />
            <p>{{ book.author }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div v-if="showBooks" class="box box2">
        <h2>{{ title }}</h2>
        <p>{{ author }}</p>
        <p class="test-style">{{ age }}</p>
      </div>
      <div class="box box5">
        <button @click="age++">Increase age</button>
        <button @click="age--">Increase age</button>
        <button @click="changeTitle('OAThbringer')">Change book title</button>
        <button @click="toggleShowBooks">
          <span v-if="showBooks">Hide Books</span>
          <span v-else>Show Books</span>
        </button>
        <div v-show="showBooks">currently showing books</div>
      </div>
    </div>
    <div class="container">
      <!-- mouse events -->
      <div class="box box5" @mouseover="handleEvent($event, 5)">
        mouseover (enter)
      </div>
      <div class="box box6" @mouseleave="handleEvent">mouseleave</div>
      <div class="box box7" @dblclick="handleEvent">double click</div>
      <div class="box box8" @mousemove="handleMousemove">
        position - {{ x }} {{ y }}
      </div>
    </div>

    <div class="box-1"><div class="circle enlarge">Circle</div></div>
    <div class="box-2">
      <button class="action-buttons">Action</button>
      <button class="reset-buttons">Reset</button>
    </div>
    <div class="test">asdasdas</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://edabit.com/challenge/zif8ugd3u2zHjMhsY",
      showBooks: true,
      title: "YOo, check this out, Test",
      author: "Brand Sander",
      age: 45,
      x: 0,
      y: 0,
      books: [
        {
          title: "title test 1",
          author: "Test author",
          img: "assets/git-pro-1.png",
          isFav: true,
        },
        {
          title: "title Test Test 22",
          author: "Test1 author",
          img: "assets/git-pro-2.png",
          isFav: false,
        },
        {
          title: "title TEST TEST TEST 333",
          author: "Test3 author",
          img: "assets/git-pro-3.png",
          isFav: false,
        },
        {
          title: "title TEST TEST TEST 444",
          author: "Test4 author",
          img: "assets/git-pro-4.png",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss"; // $text-primary would be defined in that file

.test-style {
  color: $color-danger;
}
.title {
  font-family: $open-sans;
  p {
    color: rgb(0, 25, 138);
    font-weight: $font-weight-bold;
  }
  background-color: $brand-color;
  padding: 2rem;
}
.box-1 {
  $size: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: $size/3;
  font-family: $dancing-script;
}
.circle {
  $size: 100px;
  width: $size;
  height: $size;
  border-radius: $size / 2;
  background-color: $color-danger;
  display: flex;
  justify-content: center;
  align-items: center;
}
.enlarge {
  font-size: 14px;
  transition: {
    property: all;
    duration: 2s;
    delay: 0s;
  }
  color: $color-white;
  font-weight: $font-weight-bold;

  &:hover {
    font-size: 100px;
    color: magenta;
  }
}

%toolbelt {
  box-sizing: border-box;
  border-top: 1px rgba(#000, 0.12) solid;
  padding: 16px 0;
  width: 30%;
  margin: 30px;

  &:hover {
    border: 1px rgba(rgb(255, 0, 0), 0.5) solid;
  }
}

.action-buttons {
  @extend %toolbelt;
  color: #4285f4;
}

.reset-buttons {
  @extend %toolbelt;
  color: #cddc39;
}
</style>
