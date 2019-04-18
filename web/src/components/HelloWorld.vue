<template>
  <v-app>
    <v-container grid-list-xl>
      <v-layout row wrap align-start>
        <v-flex v-for="character in chars" :key="character.char.name" xs3>
          <v-card class="pa-3">
            <v-layout>
              <v-flex xs5 align-self-center>
                <v-img :src="character.char.image" height="100px" contain/>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title align-self-center class="pa-0">
                  <div>
                    <div class="caption">{{ character.char.name }}</div>
                    <div class="title">{{ character.char.alias }}</div>
                    <div>{{ character.type }}</div>
                    <div>
                      <v-icon color="orange" v-for="i in character.char.rarity" :key="i">star</v-icon>
                    </div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-0 pt-2">
              <v-layout column>
                <v-flex class="pt-2">
                  <v-overflow-btn small :items="availability" label="Availability"/>
                </v-flex>
                <v-flex class="pt-2">
                  <v-overflow-btn small :items="progress" label="Progress"/>
                </v-flex>
                <v-flex class="pt-2">
                  <v-overflow-btn v-if="character.unique !== ''" :items="uniqueLevel" label="Unique Weapon Level"/>
                  <v-btn v-else disabled block>No Unique Available</v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    availability: ['Available', 'Not Available'],
    progress: ['Maxed', 'In Progress', 'None'],
    uniqueLevel: [30, 50, 70, 90, 110, 130],
    chars: [
      {
        char: {
          image:
            "https://appmedia.jp/wp-content/uploads/2018/02/b999c9a2b7e403a7273ebf772f0ddda6.jpg",
          name: "ペコリーヌ",
          alias: "Pecorine",
          rarity: 3,
          artwork:
            "https://vignette.wikia.nocookie.net/princess-connect/images/0/02/FullArtPecorine.jpg/revision/latest?cb=20180429222337"
        },
        skills: {
          union:
            "[Princess Strike]\nLarge physical damage to one enemy in the front,\nincrease to own physical and magical defense by medium amount",
          skill1:
            "[Lunch Time]\nRestore own HP by small amount,\nincrease to own magical defense by small amount",
          skill2:
            "[Fall Slash]\nMedium physical damage to one enemy in the front",
          ex:
            "[Princess Force]\nMedium increase to own maximum HP at the start of battle\nEX+: Large increase to own maximum HP at the start of battle"
        },
        type: "Front-Physical",
        unique: ""
      },
      {
        char: {
          image:
            "https://appmedia.jp/wp-content/uploads/2018/02/5f8128f83762501f26fdeae774e995b8-1.jpg",
          name: "キャル",
          alias: "Kyaru",
          rarity: 1,
          artwork:
            "https://vignette.wikia.nocookie.net/princess-connect/images/4/40/GKgAc5C.png/revision/latest?cb=20180226184022"
        },
        skills: {
          union: "[Grimore Burst]\nMedium magical damage to all enemies",
          skill1:
            "[Thunderbal]\nMedium magical damage to one enemy in the front",
          skill2:
            "[Armor Down]\nReduce one enemy physical and magical defense by a small amount",
          ex:
            "[Dark Eclipse] \nMedium increase to own magical attack power at the start of battle \nEX+: Large increase to own magical attack power at the start of battle"
        },
        type: "Back-Magical",
        unique:
          "[Thunderball +]\nMedium magical damage to one enemy in the front,\nsplash small magical damage around main target,\nreduce enemies magic defense by small amount"
      },
      {
        char: {
          image:
            "https://appmedia.jp/wp-content/uploads/2018/02/7d44be032d8cf590dbb5a62202a0c6cc-1.jpg",
          name: "コッコロ",
          alias: "Kokkoro",
          rarity: 1,
          artwork:
            "https://vignette.wikia.nocookie.net/princess-connect/images/f/f1/Kokkoro1.png/revision/latest?cb=20180222113957"
        },
        skills: {
          union:
            "[Aurora]\nIncrease to all allies physical and magical attack power by small amount,\nrestore own HP by small amount",
          skill1:
            "[Tri Slash]\nMedium physical damage to one enemy in the front",
          skill2:
            "[Speed Up]\nIncrease to all allies physical attack power by small amount, \nincrease to all allies action speed by small amount",
          ex:
            "[Spirit of Revelation]\nMedium increase to own physical attack power at the start of battle\nEX+: Medium increase to own magical defense at the start of battle"
        },
        type: "Middle-Physical",
        unique:
          "[Tri Slash +]\nMedium physical damage to one enemy in the front,\nincrease to own physical attack by small amount,\nincrease to own TP gain rate by small amount"
      },
      {
        char: {
          image:
            "https://appmedia.jp/wp-content/uploads/2018/02/54ca16643e593969b2f7abe2ddb4cee8.jpg",
          name: "ユイ",
          alias: "Yui",
          rarity: 1,
          artwork:
            "https://vignette.wikia.nocookie.net/princess-connect/images/4/47/Yui_3%2A_art.png/revision/latest?cb=20180226183308"
        },
        skills: {
          union: "[Heal All]\nRestore all allies HP by medium amount",
          skill1:
            "[Flower Shot]\nMedium magical damage to one enemy in the front",
          skill2:
            "[Floral Shield]\nIncrease to all allies physical defense by small amount",
          ex:
            "[Flower Aura]\nMedium increase to own magical attack power at the start of battle\nEX+ : Medium increase to own magical defense at the start of battle"
        },
        type: "Back-Magical",
        unique:
          "[Flower Shot +]\nMedium magical damage to one enemy in the front,\nreduce enemy physical attack by small amount"
      }
    ]
  })
};
</script>

<style>
</style>
