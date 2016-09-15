export default {
  podcasts: [
    {
      id: '01',
      title: 'Nerd Cast',
      author: 'Jovem Nerd',
      description: 'Descrição do podcast aqui',
      cover: 'https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg',
    }
  ],

  episodes: [
    {
      id: '100',
      podcastId: '01',
      title: '100 - Episódio especial',
      source: 'https://nerdcast.jovemnerd.com.br/nerdcast_531_bandas_de_garagem_2.mp3',
      sourceType: 'audio/mpeg'
    }
  ]
}
