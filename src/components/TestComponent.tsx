import React from "react";
import type { Navigation } from "../utils/generateNavigation";
const mainNav = ["Dev", "Validator", "Node"];
const TestComponent = ({ nav }: { nav: Navigation[] }) => {
  const [current, setCurrent] = React.useState("Dev");
  return (
    <div>
      <div className="flex gap-4 items-center">
        {mainNav?.map((item) => {
          return (
            <button
              onClick={() => setCurrent(item)}
              className={`border-2 ${
                item === current ? "border-red-500" : "border-black"
              }`}
              key={item}
            >
              {item}
            </button>
          );
        })}
      </div>
      <Nav nav={nav?.filter((item) => item.title === current)} index={0} />

      <p className="font-bold text-2xl py-10">Others</p>
      <Nav
        nav={nav?.filter((item) => !mainNav?.includes(item.title))}
        index={0}
      />
    </div>
  );
};

export default TestComponent;

const Nav = ({ nav, index }: { nav: Navigation[]; index: number }) => {
  return (
    <div
      key={`index + ${Math.random()}`}
      style={{
        paddingLeft: `${index * 20}px`,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
      className="mt-3"
    >
      {nav?.map((item) => {
        return item.children ? (
          <div>
            <p
              className="font-bold flex gap-2 border-b "
              style={{
                color: index === 0 ? "red" : "black",
              }}
            >
              {item.title}

              <svg
                className="-rotate-90"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66667 10H13.3333M6.66667 10L10 13.3333M6.66667 10L10 6.66667"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <Nav nav={item.children} index={index + 1} />
          </div>
        ) : (
          <a href={`/${item.href}/`} className="underline text-blue-500">
            {item.title}
          </a>
        );
      })}
    </div>
  );
};
