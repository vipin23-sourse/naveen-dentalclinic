"use strict"
const backToTop = document.querySelector(".back-to-top");
const opacityClass = "opacity-0";
const visibilityClass = "invisible";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.1,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});

const arrayOfColors = [
  "#0a9396",
  "#005f73",
  "#ae2012",
  "#3d405b",
  "#003049",
  "#bc6c25",
  "#ff006e",
  "#ef476f",
  "#1982c4",
  "#ee964b",
  "#0ead69",
  "#390099",
  "#f6aa1c",
  "#54101d",
  "#2b2c28",
  "#85c7f2",
  "#e15a97",
  "#2b70e3",
  "#b36a5e"
];

function getRandomColor() {
  const arrayLength = arrayOfColors.length;
  const randomValue = Math.random() * arrayLength;
  const roundedNumber = Math.floor(randomValue);
  const color = arrayOfColors[roundedNumber];
  return color;
}

scroll.on("call", (value, way, obj) => {
  if (value === "randomizeTextColor") {
    if (way === "enter") {
      obj.el.style.color = getRandomColor();
    }
  } else if (value === "toggleBackToTop") {
    if (way === "enter") {
      backToTop.classList.add(opacityClass, visibilityClass);
    } else {
      backToTop.classList.remove(opacityClass, visibilityClass);
    }
  }
});

