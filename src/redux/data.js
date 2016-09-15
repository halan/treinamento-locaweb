export default {
  ui: {
    podcastSelected: 'nerdcast',
    episodeSelected: '01'
  },

  podcasts: [
    {
      id: 'nerdcast',
      title: "NerdCast",
      autor: "Jovem Nerd",
      cover: "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
      description: 'O mundo vira piada no Jovem Nerd'
    },
    {
      id: 'gatocast',
      title: "GatoCast",
      autor: "Jovem Gato",
      cover: "http://placekitten.com/100/100",
      description: 'O mundo vira piada no Jovem Nerd'
    }

  ],

  episodes: [
    {
      id: '01',
      podcastId: 'nerdcast',
      title: 'NerdCast 531 - Bandas de garagem 2',
      source: "https://nerdcast.jovemnerd.com.br/nerdcast_531_bandas_de_garagem_2.mp3",
      type: "audio/mpeg"
    },
    {
      id: '02',
      podcastId: 'nerdcast',
      title: 'NerdCast 531 - Bandas de garagem 3',
      source: "https://nerdcast.jovemnerd.com.br/nerdcast_531_bandas_de_garagem_2.mp3",
      type: "audio/mpeg"
    },
    {
      id: '01',
      podcastId: 'gatocast',
      title: 'NerdCast 531 - Bandas de garagem 2',
      source: "https://nerdcast.jovemnerd.com.br/nerdcast_531_bandas_de_garagem_2.mp3",
      type: "audio/mpeg"
    }
  ],
};


