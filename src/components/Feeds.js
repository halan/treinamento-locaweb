import React from 'react'
import ThumbCover from './ThumbCover'

const Feeds = ({ covers }) => (
  <aside id="my-feeds">
    <h2>Meus Feeds</h2>

    <form>
      <input placeholder="URL feed..."/><input type="submit" value="Adicionar" />
    </form>

    <ul>
    { covers.map( (cover, i) => <ThumbCover key={i} src={ cover } />) }
    </ul>
    
  </aside>
)

export default Feeds
