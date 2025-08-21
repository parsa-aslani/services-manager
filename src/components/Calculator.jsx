import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
const Calculator = () => {
  const [calculatorinput, setcalculatorinput] = useState("");
  return (
    <div className="up-navbar">
      <div className="addservices-title">
        <h2>ماشین حساب</h2>
        <div className="services-title-bar mt-3 w-75 mx-auto"></div>
      </div>
      <div className="calculator-box mx-auto my-4 d-flex flex-column align-items-center px-3 py-4 shadow-lg">
        <div className="input-group position-relative">
          <input
            type="text"
            className="form-control mx-auto calculator-input"
            value={calculatorinput}
            onChange={(e) => {
              setcalculatorinput(e.target.value);
            }}
            disabled
          />
        </div>
        <div className="mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <Link
              to={"/services"}
              className=" calculator-go-home py-2 rounded button d-flex align-items-center justify-content-center calculator-button"
            >
              بازگشت
            </Link>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                for (let i = 0; i < calculatorinput.length; i++) {
                  const newvalue = calculatorinput.slice(
                    0,
                    calculatorinput.length - 1
                  );
                  setcalculatorinput(newvalue);
                }
              }}
            >
              <img
                src={require("../assets/image/icons8-backspace-50 (1).png")}
                alt="back-icon"
                className="w-100"
              />
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + ".");
              }}
            >
              .
            </button>
          </div>
          <div className="d-flex">
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "-");
              }}
            >
              -
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "1");
              }}
            >
              1
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "2");
              }}
            >
              2
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "3");
              }}
            >
              3
            </button>
          </div>
          <div className="d-flex">
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "+");
              }}
            >
              +
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "4");
              }}
            >
              4
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "5");
              }}
            >
              5
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "6");
              }}
            >
              6
            </button>
          </div>
          <div className="d-flex">
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "*");
              }}
            >
              <img
                src={require("../assets/image/icons8-multiply-50.png")}
                alt="multiplication-icon"
                className="w-100"
              />
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "7");
              }}
            >
              7
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "8");
              }}
            >
              8
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "9");
              }}
            >
              9
            </button>
          </div>
          <div className="d-flex">
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                try {
                  const calculatorequal = eval(calculatorinput);
                  setcalculatorinput(calculatorequal + "");
                } catch {
                  toast.error("مقدار وارد شده قابل محاسبه نمیباشد");
                }
              }}
            >
              =
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "/");
              }}
            >
              <img
                src={require("../assets/image/icons8-divide-50.png")}
                alt="division-icon"
                className="w-100"
              />
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput(calculatorinput + "0");
              }}
            >
              0
            </button>
            <button
              className="calculator-button btn m-1 shadow"
              onClick={() => {
                setcalculatorinput("");
              }}
            >
              c
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
