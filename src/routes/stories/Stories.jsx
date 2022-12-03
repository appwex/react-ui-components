import { useState } from "react";
import PropTypes from "prop-types";

import "./Stories.css";

const Stories = ({ argList, template, customClass }) => {
  const [arg, setArg] = useState(argList[0].arg || "");
  const args = argList.find((el) => el.arg === arg);

  return (
    <div className={`container ${customClass}`}>
      <select
        id="selectMenu"
        name="variants"
        onChange={(e) => setArg(e.target.value)}
        className="variantSelector"
      >
        {argList.map((el, i) => (
          <option key={i} value={el.arg}>
            {el.arg}
          </option>
        ))}
      </select>

      <div className="content">{template(args)}</div>
    </div>
  );
};

Stories.propTypes = {
  argList: PropTypes.array.isRequired,
  template: PropTypes.func.isRequired,
  customClass: PropTypes.string,
};

export default Stories;
