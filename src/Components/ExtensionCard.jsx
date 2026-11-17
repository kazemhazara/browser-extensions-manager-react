function ExtensionCard({
  id,
  logo,
  name,
  description,
  isActive,
  changeCard,

  onClickRemoveCard,
}) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="main__card p-3">
        <div className="main__card-contect">
          <img src={logo} alt={name} className="main__card-img" />
          <div className="main__card-dec">
            <span className="main__card-title">{name}</span>
            <p className="main__card-text">{description}</p>
          </div>
        </div>
        <div className="main__card-bottom">
          <button
            className="main__card-btn"
            onClick={() => onClickRemoveCard(id)}
          >
            Remove
          </button>
          <label className="toggle-switch">
            <input
              onChange={(event) => changeCard(id)}
              className="btn-checkbox"
              type="checkbox"
              checked={isActive}
            />
            <span className="toggle-switch__slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ExtensionCard;
