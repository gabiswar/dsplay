import './style.scss';

function TableContainer(props) {
  return (
    <div className="table-row">
      <div className="table-flag">
        <div className="flag-content">
          <img src={props.flag} /*alt={props.currency}*/ className="currency-image" />
        </div>
        <div className="flag-content">
          {props.currency}
        </div>
      </div>
      <div className="table-cell">{props.weBuy}</div>
      <div className="table-cell">{props.weSell}</div>
    </div>
  );
}

export default TableContainer;
