import React from "react";
import "./Price.css";
import backgroundVideo from "./video/bg.mp4";

function Price() {
  return React.createElement(
    "section",
    { class: "pricing py-5 mt-3" },
    
    React.createElement(
      "div",
      { className: "background-video" },
      React.createElement(
        "video",
        {
          autoplay: "true",
          loop: "true",
          muted: "true",
          className: "video",
        },
        React.createElement("source", {
          src: backgroundVideo,
          type: "video/mp4",
        })
      )
    ),

    React.createElement(
      "div",
      { class: "container" },

      React.createElement(
        "div",
        { class: "row" },

        // First Column
        React.createElement(
          "div",
          { className: "col-lg-4" },
          React.createElement(
            "div",
            { className: "card rounded-pill mb-5 mb-lg-0" },
            React.createElement(
              "div",
              { className: "card-body n-body" },
              React.createElement(
                "h5",
                {
                  className: "card-title text-muted text-uppercase text-center",
                },
                "Free"
              ),
              React.createElement(
                "h6",
                { className: "card-price text-center" },
                "$0",
                React.createElement("span", { className: "period" }, "/month")
              ),
              React.createElement("hr"),
              React.createElement(
                "ul",
                { className: "fa-ul" },
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Single User"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "5GB Storage"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Unlimited Public Projects"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Community Access"
                ),
                React.createElement(
                  "li",
                  { className: "text-muted" },
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", { className: "fas fa-times" })
                  ),
                  "Unlimited Private Projects"
                ),
                React.createElement(
                  "li",
                  { className: "text-muted" },
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", { className: "fas fa-times" })
                  ),
                  "Dedicated Phone Support"
                ),
                React.createElement(
                  "li",
                  { className: "text-muted" },
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", { className: "fas fa-times" })
                  ),
                  "Free Subdomain"
                ),
                React.createElement(
                  "li",
                  { className: "text-muted" },
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fas fa-times",
                    })
                  ),
                  "Monthly Status Reports"
                )
              ),
              React.createElement(
                "div",
                { className: "d-grid" },
                React.createElement(
                  "a",
                  { href: "#", className: "btn " },
                  "Subscribe"
                )
              )
            )
          )
        ),

        // 2nd column
        React.createElement(
          "div",
          { className: "col-lg-4" },
          React.createElement(
            "div",
            { className: "card mb-5 bg mb-lg-0" },
            React.createElement(
              "div",
              { className: "card-body anti-body" },
              React.createElement(
                "h5",
                {
                  className: "card-title text-muted text-uppercase text-center",
                },
                "Plus"
              ),
              React.createElement(
                "h6",
                { className: "card-price text-center" },
                "$9",
                React.createElement("span", { className: "period" }, "/month")
              ),
              React.createElement("hr"),
              React.createElement(
                "ul",
                { className: "fa-ul" },
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Single User"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "5GB Storage"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Unlimited Public Projects"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Community Access"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Unlimited Private Projects"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Dedicated Phone Support"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Free Subdomain"
                ),
                React.createElement(
                  "li",
                  { className: "text-muted" },
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", { className: "fas fa-times" })
                  ),
                  "Monthly Status Reports"
                )
              ),
              React.createElement(
                "div",
                { className: "d-grid" },
                React.createElement(
                  "a",
                  { href: "#", className: "btn anti-btn" },
                  "Subscribe"
                )
              )
            )
          )
        ),

        // 3 column
        React.createElement(
          "div",
          { className: "col-lg-4" },
          React.createElement(
            "div",
            { className: "card mb-5 mb-lg-0" },
            React.createElement(
              "div",
              { className: "card-body n-body" },
              React.createElement(
                "h5",
                {
                  className: "card-title text-muted text-uppercase text-center",
                },
                "Pro"
              ),
              React.createElement(
                "h6",
                { className: "card-price text-center" },
                "$49",
                React.createElement("span", { className: "period" }, "/month")
              ),
              React.createElement("hr"),
              React.createElement(
                "ul",
                { className: "fa-ul" },
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Single User"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "5GB Storage"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Unlimited Public Projects"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Community Access"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Unlimited Private Projects"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Dedicated Phone Support"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Free Subdomain"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "span",
                    { className: "fa-li" },
                    React.createElement("i", {
                      className: "fa-solid fa-circle-check",
                    })
                  ),
                  "Monthly Status Reports"
                )
              ),
              React.createElement(
                "div",
                { className: "d-grid" },
                React.createElement(
                  "a",
                  {
                    href: "#",
                    className: "btn",
                  },
                  "Subscribe"
                )
              )
            )
          )
        )
      )
      // )
    )
  );
}

export default Price;
