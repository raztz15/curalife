import React from "react";
import freeshipping from "./Images/freeShipping.png";
import shopifySecure from "./Images/Screen Shot 2022-03-24 at 17.28 2-1.png";
import reviews from "./Images/Screen Shot 2022-03-24 at 17.28 3.png";
import stripe from "./Images/Screen Shot 2022-03-24 at 17.28 4.png";
import sheild from "./Images/1.png";
import threeBoxes from "./Images/2.png";
import star from "./Images/4.png";
import pci from "./Images/5.png";
import shopify from "./Images/6.png";
import star2 from "./Images/3.png";
import paypal from "./Images/PayPal.svg.png";
import visa from "./Images/visa.png";
import mastercard from "./Images/mastercard.png";
import amex from "./Images/amex.png";
import discover from "./Images/discover.png";
import "./Curalife.css";

function CuralifeApp() {
  const year = new Date().getFullYear();
  let years = ["Year"];

  for (let i = 2000; i <= year; i++) {
    years.push(i);
  }

  const month = new Date().getMonth();
  let months = ["Month"];

  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }

  return (
    <>
      <header className="header-top">
        <img className="sheild" src={sheild} width="70px" />
        <span className="regular-size">
          CERTIFIED 100% SAFE & SECURE CHECKOUT
        </span>
        <span className="mobile-size">SECURE ORDER FORM</span>
      </header>

      <header className="header-bottom">
        <span className="normal-size">
          <span id="tick-mark"></span>
          100% Guarantee
          <span id="tick-mark"></span>
          100% Secure
          <span id="tick-mark"></span>
          100% Encrypted Checkout
        </span>
        <span className="qustions" id="questions">
          Questions?
        </span>
        <span className="number">1-888-286-7307</span>
        <span className="questions-mobile-size">Questions? 1-888-286-7307</span>
      </header>

      <div className="sponsore">
        <img
          id="sponsore"
          src={shopifySecure}
          width="130px"
          alt="shopify secure"
        />
        <img id="sponsore" src={reviews} width="110 px" alt="reviews.io" />
        <img id="sponsore" src={stripe} width="130px" alt="stripe" />
      </div>

      <h1 className="head1">
        What we'll ship <span>you today</span>
      </h1>

      <div className="prices">
        <div className="prices-block-image">
          <img src={freeshipping} alt="free shipping" width={"350px"} />
        </div>

        <div className="prices-box">
          <div className="prices-block-prices">
            <span>
              Subtotal<span id="dashes"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>{" "}
              $37.00
            </span>
            <br />
            <span>
              Shipping<span id="dashes"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>{" "}
              $00.00
            </span>
            <br />
            <span id="total">
              Total<span id="dashes"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>{" "}
              $37.00
            </span>
            <br />
          </div>
          <div className="prices-box-footer">
            <span id="footer-text">
              Note: The charge will appear on your card as Curalife
            </span>
          </div>
        </div>
      </div>

      <div className="save-time-block">
        <div className="save-time-block-box">
          <div className="save-time-header">
            Prefer to Save
            <br />
            Time & Money ?
          </div>

          <div className="save-time-block-image">
            <img src={threeBoxes} alt="three boxes" width={"300px"} />
          </div>

          <div className="save-8dollars-line">Save $8 per bottle</div>

          <div className="save-time-block-footer">
            <div className="radio">
              <input type={"radio"} value={"save-8-dollars"} />
            </div>

            <div className="save-time-block-footer-text">
              <label for="save-8-dollars">
                When you check this box, your order will be upgraded to a
                CuraLin
                <br />3 pack saving you time in reordering{" "}
                <span>
                  and 10% off your order.
                  <br />
                </span>
                You are still protected by our money back guarantee.
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="form1">
        <div className="form-left">
          <div className="form-left-header">
            <h4>Step 1</h4>
            <h2>Enter Billing Info</h2>
          </div>
          <form>
            <label htmlFor="first-name">First Name</label>
            <input type={"text"} id="first-name" />
            <br />
            <label>Last Name&nbsp;</label>
            <input id="last_name" name="last_name" type={"text"} />
            <br />
            <label>Best Phone&nbsp;</label>
            <input id="best_phone" name="best_phone" type={"text"} />
            <br />
            <label>Best Email&nbsp;</label>
            <input id="best_email" name="best_email" type={"text"} />
            <br />
            <label>Re-enter Email&nbsp;</label>
            <input id="reenter_email" name="reenter_email" type={"text"} />
            <br />
            <label>Address&nbsp;</label>
            <input id="address" name="address" type={"text"} />
            <br />
            <label>Address 2&nbsp;</label>
            <input id="address2" name="address2" type={"text"} />
            <br />
            <label>City&nbsp;</label>
            <input id="city" name="city" type={"text"} />
            <br />
            <label>Zip/Postal&nbsp;</label>
            <input id="zip" name="zip" type={"text"} />
            <br />
            <label>Country&nbsp;</label>
            <input id="country" name="country" type={"text"} />
            <br />
            <label>State/Province&nbsp;</label>
            <input id="state" name="state" type={"text"} />
          </form>
        </div>
        <div className="form-right">
          <div className="form-right-header">
            <h4>Step 2</h4>
            <h2>Enter Shipping Info</h2>
            <input type={"radio"} />
            <span>Check here if shipping & billing are same</span>
          </div>
          <form>
            <label>First Name</label>
            <input type={"text"} />
            <br />
            <label>Last Name</label>
            <input type={"text"} />
            <br />
            <label>Address</label>
            <input type={"text"} />
            <br />
            <label>Address 2</label>
            <input type={"text"} />
            <br />
            <label>City</label>
            <input type={"text"} />
            <br />
            <label>Zip/Postal</label>
            <input type={"text"} />
            <br />
            <label>Country</label>
            <input type={"text"} />
            <br />
            <label>State/Province</label>
            <input type={"text"} />
            <br />
          </form>
        </div>
      </div>

      <div className="step3">
        <hr width={"50%"} />
        <h5>Step 3</h5>
        <h2>Select Shipping Method</h2>

        <div className="dropdown">
          Shipping
          <select className="dropbtn">
            <option>FTL</option>
            <option>LTL</option>
            <option>Rail Service Shipping</option>
          </select>
        </div>
      </div>

      <div className="step4">
        <hr width={"50%"} />
        <h5>Step 4</h5>
        <h2>Enter Payment Info</h2>

        <div className="step4-box">
          <div className="top-row">
            <div className="pay-with">
              <input type={"radio"} value={"paypal"} />
              <label for="paypal">Pay With</label>
            </div>
            <div className="paypal">
              <img src={paypal} alt="" width={"120px"} />
            </div>
          </div>

          <div className="second-row">
            <div className="pay-with2">
              <input type={"radio"} value={"cards"} />
              <label for="paypal">Pay With Credit Card</label>
            </div>
            <div className="cards-images">
              <div className="card">
                <img src={visa} alt="visa" width={"50px"} />
              </div>
              <div className="card">
                <img src={mastercard} alt="mastercard" width={"50px"} />
              </div>
              <div className="card">
                <img src={amex} alt="amex" width={"50px"} />
              </div>
              <div className="card">
                <img src={discover} alt="discover" width={"50px"} />
              </div>
            </div>
          </div>

          <div className="last-row">
            <div className="last-row-first-row">
              <div className="last-row-first-row-child">
                <label className="label1">Name on Card </label>
                <input id="name" name="name" type={"text"} />
              </div>
              <div className="last-row-first-row-child">
                <label>Card Number </label>
                <input id="name" name="name" type={"text"} />
              </div>
            </div>
            <div className="last-row-second-row">
              <div className="last-row-second-row-child">
                <label>Expiration Date </label>
                <select className="year-dropdown">
                  {years.map((year, index) => {
                    return (
                      <option key={`year${index}`} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
                <select className="months-dropdown">
                  {months.map((month, index) => {
                    return (
                      <option key={`month${index}`} value={month}>
                        {month}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label>Security Code&nbsp;</label>
                <input id="name" name="name" type={"text"} />
                <a href="#">whats this</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="process-order">
        <div className="text-block">
          <p>
            YES! Process
            <br />
            My Order
          </p>
        </div>
        <div className="star-image">
          <img src={star2} alt="star" width={"140px"} />
        </div>
      </div>

      <div className="footer">
        <div className="footer-head">
          <span className="three">3</span>
          <span className="reasons">Reasons why your order</span>
          <br />
          <span className="is">is</span>
          <span className="safe">safe and secure</span>
        </div>
        <div className="footer-foot">
          <div className="risk-free">
            <img src={star} alt="guarantee" width={"80px"} />
            <p>
              <span className="first-line">100% Risk Free</span>
              <br />
              <br />
              if you're not thrilled with how fantastic
              <br />
              you look and feel after tapping into your
              <br />
              unique female hormone advantage & or
              <br />
              if you aren't satisfied for any reason in
              <br />
              the next 90 days, return anytime for a full
              <br />
              refund (less S&H)
            </p>
          </div>
          <div className="protected">
            <img src={pci} alt="pci" width={"65px"} />
            <p>
              <span className="first-line">100% Proteced</span>
              <br />
              <br />
              Your checkout is protected by industry
              <br />
              leading PCI compliant security
            </p>
          </div>
          <div className="secure">
            <img src={shopify} alt="shopify" width={"65px"} />
            <p>
              <span className="first-line">100% Secure</span>
              <br />
              <br />
              When you place your order it will be
              <br />
              protected by 256-bit encrypted SSL - the
              <br />
              same technology that blanks use to
              <br />
              protect their online transactions!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CuralifeApp;
