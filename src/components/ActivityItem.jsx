import "../assets/css/ActivityItem.css";

function ActivityItem(props) {
  const { title, subtitle, playSoundClick } = props;
  
  const imageSrc = `/assets/images/${title}.png`;
  const imageIcon = `/assets/images/icn_${title}.png`;

  return (
    <div className="activity-card" onClick={() => playSoundClick()}>
      <div className="activity-card-image" style={{ backgroundImage: `url(${imageSrc})` }}></div>
      <div className="activity-card-content">
        <div className="activity-card-icon-container">
          <i className="activity-card-icon" style={{ backgroundImage: `url(${imageIcon})` }}/>
        </div>
        <span className="activity-card-title noselect">{title}</span>
        <span className="activity-card-subtitle noselect">{subtitle}</span>
      </div>
    </div>
  );
}

export default ActivityItem;
