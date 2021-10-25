import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";

import { setFormData } from "../../store/Form/actions";
import { getWaetherState } from "../../store/Form/selectors";

export const Task4 = () => {
  const dispatch = useDispatch();

  // const AllChatList = useSelector(getAllChats);

  const form = useRef();
  const [height, setHeight] = useState(0);

  const formData = useSelector(getWaetherState);
  console.log(formData);

  useEffect(() => {
    if (form.current) {
      let res = [];
      form.current.childNodes.forEach((el) => {
        if (el.nodeName === "INPUT") {
          res.push(el.value);
        }
      });
      dispatch(setFormData(res));
    }
  }, [height]);
  return (
    <section>
      <h1>Form</h1>
      <form ref={form} action="">
        <input name="field1" type="text" />
        <input name="field1" type="text" />
        <input name="field2" type="text" />
        <input name="field3" type="text" />
        <input name="field4" type="text" />
        <button
          onClick={(e) => {
            e.preventDefault();
            setHeight(height + 1);
          }}
        >
          send
        </button>
      </form>
      <h1>FormData</h1>
      {formData.map((el) => (
        <div>{el !== "" ? el : "emptyField"}</div>
      ))}
    </section>
  );
};
