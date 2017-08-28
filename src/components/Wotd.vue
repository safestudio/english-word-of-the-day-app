<template>
  <div class="wotd">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <h1>{{title}}</h1>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="word in words" :key="word.word">
          <el-card class="box-card grid-item" style="height:250px;">
            <div slot="header" class="clearfix">
              <span style="line-height: 36px;" v-if="word">
                <h1><a v-bind:href="word.url" target="blank" class="no-underline">{{word.word}}</a></h1>
              </span>
            </div>
            <div class="text item" style="font-size: 20px;">
              {{word.meaning}}
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'wotd',
  data: () => ({
    words: [],
    errors: [],
    title: 'English word of the day'
  }),

  // Fetches posts when the component is created.
  async created () {
    // async / await version (created() becomes async created())
    try {
      const response = await axios.get(`http://something-of-the-day.herokuapp.com/api/v1/words`)
      this.words = response.data
    } catch (e) {
      this.errors.push(e)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.no-underline {
  text-decoration: none;
}
</style>
