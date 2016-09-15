import React from 'react';

class MyFeeds extends React.Component {
  constructor() {
    super();
    this.state = { showForm: false };
  }

  showFormNow(e) {
    e.preventDefault();
    this.setState({ showForm: true });
  }

  hideFormNow(e) {
    e.preventDefault();
    this.setState({ showForm: false });
  }

  submit(e) {
    e.preventDefault();
    this.hideFormNow(e);
    this.props.fetchPodcast(this.refs.input.value)
  }

  renderForm() {
    if(this.state.showForm)
      return (
        <form onSubmit={ this.submit.bind(this) } >
          <input ref="input" placeholder="URL feed..."/><input type="submit" value="Adicionar" />
        </form>
      );

    return '';
  }

  renderShowFormButton() {
    if(!this.state.showForm)
      return <a onClick={ this.showFormNow.bind(this) } >+</a>;

    return '';
  }

  render() {
    const { podcasts = [], selected } = this.props; 
    
    return (
      <aside id="my-feeds">
        <h2>Meus Feeds { this.renderShowFormButton() }</h2>
        { this.renderForm() }
        <ul>
        { podcasts.map((podcast, i) => (
          <li key={i} className={ i == selected ? 'selected' : ''}>
            <img src={ podcast.cover } onClick={ () => this.props.selectPodcast(podcast.id) }/>
          </li>
        )) 
        }
        </ul>
      </aside>
    );
  }
};

export default MyFeeds;
