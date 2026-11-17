import ExtensionCard from "./ExtensionCard";

function ExtensionsSection({
  data,
  onClickFilter,
  extensionFilter,
  changeCard,
  onClickRemoveCard,
}) {
  let filterExtension = [];
  if (extensionFilter === "all") {
    filterExtension = data;
  } else if (extensionFilter === "active") {
    filterExtension = data.filter((item) => item.isActive);
  } else {
    filterExtension = data.filter((item) => !item.isActive);
  }
  return (
    <main className="main">
      <div className="container">
        <div className="main__header">
          <h2 className="main__header-title">Extensions List</h2>

          <div className="main-header__filter-buttons">
            <button
              onClick={(event) => onClickFilter(event.currentTarget.value)}
              className={`main__button ${extensionFilter === "all" ? "active-btn" : ""}`}
              type="button "
              value="all"
              id="all-button"
            >
              All
            </button>
            <button
              onClick={(event) => onClickFilter(event.currentTarget.value)}
              className={`main__button ${extensionFilter === "active" ? "active-btn" : ""}`}
              type="button"
              value="active"
              id="active-button"
            >
              Active
            </button>
            <button
              onClick={(event) => onClickFilter(event.currentTarget.value)}
              className={`main__button ${extensionFilter === "inactive" ? "active-btn" : ""}`}
              type="button"
              value="inactive"
              id="inactive-button"
            >
              Inactive
            </button>
          </div>
        </div>
        <div className="main__content mt-4">
          <div className="row gy-3" id="data-container">
            {filterExtension.map((item) => (
              <ExtensionCard
                key={item.id}
                {...item}
                changeCard={changeCard}
                onClickRemoveCard={onClickRemoveCard}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ExtensionsSection;
