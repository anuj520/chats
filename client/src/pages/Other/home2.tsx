import '@/two.css';
export const  Home2=()=> {
  const discussions = [
    { id: 1, title: 'Discussion Title Goes Here', subtitle: 'Contrial' },
    { id: 2, title: 'Discussion Title Goes Here', subtitle: 'Contrial' },
    { id: 3, title: 'Discussion Title Goes Here', subtitle: 'Contrial' }
  ]

  return (
    <section className="discussions">
      <h2 className="discussions-title">Featured Discussions</h2>
      <div className="discussions-content">
        <div className="featured-box">
          <h3 className="featured-title">Featured Projects under ProbeSTEM</h3>
          <p className="featured-preview">
            This is a short preview of the discussion contetisually 2-3 lines max.
          </p>
          <div className="featured-author">
            <div className="featured-avatar"></div>
            <span className="featured-name">John Doe</span>
          </div>
          <button className="btn-read-more">Read More</button>
        </div>
        <div className="discussions-list">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="discussion-item">
              <div className="discussion-avatar"></div>
              <div className="discussion-info">
                <h4 className="discussion-title">{discussion.title}</h4>
                <p className="discussion-subtitle">{discussion.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

