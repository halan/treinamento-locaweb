import React from 'react'

const Feeds = () => (
  <aside id="my-feeds">
    <h2>Meus Feeds</h2>
    <form>
      <input placeholder="URL feed..."/><input type="submit" value="Adicionar" />
    </form>

    <ul>
      <li className="selected">
        <img src="https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg" />
      </li>
      <li>
        <img src="https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg" />
      </li>
      <li>
        <img src="https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg" />
      </li>
    </ul>
  </aside>
)

export default Feeds
