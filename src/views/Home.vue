<template>
  <div class="home">
    <v-container>
        <v-layout row wrap>
          <v-flex xs12 :key="comKey">
            <v-chip
            class="white--text ma-1 chip"
            v-for="(chip, index) in chips"
            :key="index"
            :color="chip.color"
            small
            @click="filter"
            >
              <span class="skil">{{chip.name}}</span>
            </v-chip>
          </v-flex>
          <v-flex 
          v-for="(item, index) in items" 
          :key="index" 
          xs12 sm6 md4 lg4 xl2
          :class="`project-wrap ALL ${item.skils.join(' ').replace(/[\/|\.]/ig, '')}`"
          >
            <v-card
            :class="`project`"
            >
              <v-img
              class="white--text align-end"
              :src="item.src"
              cover
              width="100%"
              height="250"
              >
                <v-card-title class="project-title">{{item.title}}</v-card-title>
              </v-img>
              <v-card-subtitle>
                <div class="subtitle-wrap">
                  <div class="mb-4">
                    <span>{{item.company}}</span>
                  </div>
                  <div>
                    <span>
                      {{item.time}}
                    </span>
                  </div>
                </div>
                <span>
                  <v-chip
                  class="white--text mr-2 mb-2"
                  v-for="(skil, index) in item.skils"
                  :key="index"
                  :color="meta['skilColor'][skil]"
                  small
                  >
                    <span class="skil">{{skil}}</span>
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
import meta from '@/model/meta'

export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    items: projects.sort((a,b) => a.time > b.time ? -1 : a.time < b.time ? 1 : 0),
    chips: chips,
    meta: meta,
    comKey: 1
  }),
  methods: {
    filter(e) {
      const elAllProject = document.querySelectorAll('.ALL');

      elAllProject.forEach(el => {
        el.style.transform = "scale(0)"
        setTimeout(() => {
          el.style.display = "none";

          const elProject = document.querySelectorAll(`.${e.target.innerText.replace(/[\/|\.|\+]/ig, '')}`);
          
          elProject.forEach(el => {   
            el.style.display = "block"
            setTimeout(() => {
              elProject.forEach(el => {     
                el.style.transform = "scale(1)"
                  
              });
            }, 100);
          }, 100);
        }, 400);
      });
    }
  }
}
</script>

<style scoped>
  .flex {
    padding: 8px;
  }
  .project-wrap {
    overflow: hidden;
    transition: transform 0.4s;
  }
  .project {
    min-height: 400px;
    transition: all 0.4s;
    cursor: pointer;
  }
  .project:hover {
    opacity: 0.6;
  }
  .project-title {
    text-shadow: 2px 2px 2px #444;
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
    -webkit-line-clamp: 2; /* 라인수 */ 
    -webkit-box-orient: vertical; 
    word-wrap:break-word;
  }
  .home {
    height: 100%;
  }
  .container {
    height: 100%;
  }
  .chip {
    cursor: pointer;
    transition: transform 0.4s;
  }
  .chip:hover {
    opacity: 0.5;
  }
</style>
