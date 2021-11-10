import React, { Fragment } from "react";
const WorkingTime = () => {
  return (
    <Fragment>
      <h1 className="aside__heading">
        <i className="fas fa-clock aside__icons"></i>Working Time
      </h1>
      <div className="aside__options">
        <div className="aside__checkbox">
          <form action="GET" className="form__currentOpen">
            <label className="aside__label">
              current open
              <input
                id="current"
                type="checkbox"
                className="current-open"
                name="current"
              />
            </label>
          </form>
          <form action="GET" className="form__specifiedTime">
            <label className="aside__label">
              specified
              <input
                type="number"
                max="24"
                min="1"
                id="aside__specificTime"
                name="Specified"
              />
            </label>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default WorkingTime;
