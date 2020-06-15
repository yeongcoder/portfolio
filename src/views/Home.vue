<template>
  <div class="home">
    <v-container>
        <v-layout row wrap>
          <v-flex v-for="(item, index) in items" :key="index" xs12 sm3>
            <v-card
            class="project"
            >
              <v-img
              class="white--text align-end"
              :src="item.src"
              >
                <v-card-title>{{item.title}}</v-card-title>
              </v-img>
              <v-card-subtitle>
                <div class="subtitle-wrap">
                  <span class="mb-4">{{item.company}}</span>
                  <span>
                    <v-icon class="mr-1" small>mdi-clock-time-three-outline</v-icon>
                    {{item.time}}
                  </span>
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
              <v-card-text>{{item.desc}}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    items: [{
      src: 'https://vue-native.io/images/landing.png',
      title: '프로젝트1',
      company: '한국인증서비스(주)',
      time: '2개월',
      skils: [{
        name: 'vuejs',
        color: '#42b983'
      }, {
        name: 'vutify',
        color: '#1976d2'
      }],
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
    }, {
      src: 'https://vue-native.io/images/landing.png',
      title: '프로젝트1',
      company: '한국인증서비스(주)',
      time: '2개월',
      skils: [{
        name: 'vuejs',
        color: '#42b983'
      }, {
        name: 'vutify',
        color: '#1976d2'
      }],
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
    }, {
      src: 'https://vue-native.io/images/landing.png',
      title: '프로젝트1',
      company: '한국인증서비스(주)',
      time: '2개월',
      skils: [{
        name: 'vuejs',
        color: '#42b983'
      }, {
        name: 'vutify',
        color: '#1976d2'
      }],
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
    }, {
      src: 'https://vue-native.io/images/landing.png',
      title: '프로젝트1',
      company: '한국인증서비스(주)',
      time: '2개월',
      skils: [{
        name: 'vuejs',
        color: '#42b983'
      }, {
        name: 'vutify',
        color: '#1976d2'
      }],
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
    }]
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
</style>
