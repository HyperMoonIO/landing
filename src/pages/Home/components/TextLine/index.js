import React from "react";

import s from "./style.scss";

const TextLine = ({ children }) => (
  <div className={s.til}>
    <div className={s.line} />
    <div className={s.text}>{children}</div>
    <div className={s.line} />
  </div>
);

export default TextLine;
