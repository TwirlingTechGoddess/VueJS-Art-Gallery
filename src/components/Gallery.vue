/* eslint-disable no-alert, no-console */

<template>
  <div>
    <h1><em>iVue League Gallery</em></h1>
    <button v-on:click="change (object.next)" class="nav-button">More Art</button>
    <button v-on:click="showCurated" >View Exhibit</button>
    <div class="gallery" >
      <aside v-for="obj in galleryImg" :key="obj.id">
        <p contenteditable="true">add caption</p>
        <img  v-bind:src="obj.image"  alt="obj.caption" height="{image.height" width="image.width" class="glryImg" />
      </aside>
    </div>
    <hr />
    <h2>Curate Your Own Exhibit</h2>
    <h3>CLICK ON AN IMAGE TO ADD IT TO YOUR EXHIBIT</h3>
    <section>
      <main v-for="image in images" :key="image.id">
        <img v-bind:src="image.baseimageurl"  alt="Smiley face" height="image.height" width="image.width/2" v-on:click="highlight" />
      </main>
      <button v-on:click="change (object.next)" >More Art</button>
      <button v-on:click="showCurated" >View Exhibit</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'this is default'
    }
  },
  data () {
    return {
      images: [],
      object: {},
      active: false,
      galleryImg: []
    }
  },
  methods: {
    showCurated: function () {
      document.querySelector('.gallery').style.height = '65vh'
      document.querySelector('section').hidden = true
      document.querySelector('.nav-button').innerText = 'Back'
    },
    change: function (url) {
      this.$http.get(url).then(function (data) {
        this.images = data.body.records
        this.object = data.body.info
      })
      document.querySelector('.gallery').style.height = '15rem'
      document.querySelector('section').hidden = false
      document.querySelector('.nav-button').innerText = 'More Art'
    },
    highlight: function (e) {
      document.querySelector('.gallery').style.height = '15rem'
      const imgObj = { image: e.target.src, caption: '', id: Date.now() }
      this.galleryImg.push(imgObj)
    }
  },
  created () {
    this.$http.get('https://api.harvardartmuseums.org/image?apikey=f0eebd50-e119-11e8-abe4-37afcc19e5ee').then(function (data) {
      this.images = data.body.records
      this.object = data.body.info
    }).then(function () {
      document.querySelector('.gallery').style.height = '0rem'
    })
  }
}
</script>

<style scoped>
  img {
    width: 40vw;
    cursor: pointer;
  }
  button {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border-radius: 0.6em;
    cursor: pointer;
    align-self: center;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 20px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    border-color: black;
    color: #fff;
    box-shadow: 0 0 40px 40px #4F2721 inset, 0 0 2rem 0 brown;
    transition: all 150ms ease-in-out;
    width: 15rem;
    max-height: 4rem;
  }
  button:hover {
    color: purple;
    outline: 0;
    box-shadow: 0 0 10px 0 #4F2721 inset, 0 0 10px 6px purple;
  }
  .gallery {
    height: 15rem;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
  }
  .glryImg, p {
    width: 8vw;
    margin: 0 .2rem;
  }

  .glryImg:hover {
    width: 25vw;
  }

  aside {
    margin: auto;
    padding: .5rem;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100 */
    background: -moz-radial-gradient(center, ellipse cover, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }

  p {
    height: 2.5rem;
    margin-bottom: .5rem;
    overflow: scroll;
    font-size: x-large;
    color: white;
    text-shadow: 2px 2px 2px #000000;
  }
  h1 {
    font-size: 8rem;
    margin: -5rem 0 0 0 ;
  }
  h2 {
    font-size: xx-large;
    margin: 0;
  }
  h3 {
    font-size: x-large;
    margin: 0;
  }
  main {
  margin-bottom: .5rem;
  }
</style>
