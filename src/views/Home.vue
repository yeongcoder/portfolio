<template>
  <div class="home">
    <v-container>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <v-chip
            class="white--text ma-1 chip"
            v-for="(chip, index) in chips"
            :key="index"
            :color="chip.color"
            small
            >
              <span class="skil">{{chip.name}}</span>
            </v-chip>
          </v-flex>
          <v-flex v-for="(item, index) in items" :key="index" xs12 sm6 md4 lg3 xl2>
            <v-card
            class="project"
            >
              <v-img
              class="white--text align-end"
              :src="item.src"
              cover
              width="100%"
              height="250"
              >
                <v-card-title>{{item.title}}</v-card-title>
              </v-img>
              <v-card-subtitle>
                <div class="subtitle-wrap">
                  <div class="mb-4">
                    <span>{{item.company}}</span>
                  </div>
                  <div>
                    <!-- <span>
                      <v-icon class="mr-1" small>mdi-clock-time-three-outline</v-icon>
                    </span> -->
                    <span>
                      {{item.time}}
                    </span>
                  </div>
                </div>
                <span>
                  <v-chip
                  class="white--text mr-2"
                  v-for="(skil, index) in item.skils"
                  :key="index"
                  :color="skil.color"
                  small
                  >
                    <span class="skil">{{skil.name}}</span>
                  </v-chip>
                </span>
              </v-card-subtitle>
              <v-card-text>
                <p class="desc">{{item.desc}}</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import projects from '@/model/project'
import chips from '@/model/chip'

export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    items: projects,
    chips: chips
  })
}
</script>

<style scoped>
  .flex {
    padding: 8px;
  }
  .project {
    min-height: 400px;
    transition: all 0.4s;
    cursor: pointer;
  }
  .project:hover {
    opacity: 0.6;
  }
  .subtitle-wrap {
    display: flex;
    justify-content: space-between
  }
  .skil {
    font-weight: bold;
  }
  .desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* 라인수 */ 
    -webkit-box-orient: vertical; 
    word-wrap:break-word;
  }
  .home {
    height: 100%;
  }
  .container {
    height: 100%;
  }
  .layout {
    height: 100%;
  }
  .chip {
    cursor: pointer;
  }
  .chip:hover {
    opacity: 0.5;
  }
  .v-card__title {
    background-color: rgba(0, 0, 0, 0.247);
  }
</style>
