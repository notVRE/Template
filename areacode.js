// areaCodes.js
const areaCodes = {
  201: {
    state: "New Jersey",
    tz: [{ zone: "America/New_York", abbrev: "EST" }],
  },
  202: {
    state: "District of Columbia",
    tz: [{ zone: "America/New_York", abbrev: "EST" }],
  },
  203: {
    state: "Connecticut",
    tz: [{ zone: "America/New_York", abbrev: "EST" }],
  },
  205: { state: "Alabama", tz: [{ zone: "America/Chicago", abbrev: "CST" }] },
  206: {
    state: "Washington",
    tz: [{ zone: "America/Los_Angeles", abbrev: "PST" }],
  },
  207: { state: "Maine", tz: [{ zone: "America/New_York", abbrev: "EST" }] },
  208: {
    state: "Idaho",
    tz: [
      { zone: "America/Boise", abbrev: "MST" }, // Mountain Time
      { zone: "America/Los_Angeles", abbrev: "PST" }, // Pacific Time
    ],
  },
  209: {
    state: "California",
    tz: [{ zone: "America/Los_Angeles", abbrev: "PST" }],
  },
  212: { state: "New York", tz: [{ zone: "America/New_York", abbrev: "EST" }] },
  213: {
    state: "California",
    tz: [{ zone: "America/Los_Angeles", abbrev: "PST" }],
  },
  214: { state: "Texas", tz: [{ zone: "America/Chicago", abbrev: "CST" }] },
  215: {
    state: "Pennsylvania",
    tz: [{ zone: "America/New_York", abbrev: "EST" }],
  },
  216: { state: "Ohio", tz: [{ zone: "America/New_York", abbrev: "EST" }] },
  217: { state: "Illinois", tz: [{ zone: "America/Chicago", abbrev: "CST" }] },
  364: {
    state: "Kentucky",
    tz: [
      { zone: "America/Chicago", abbrev: "CST" },
      { zone: "America/New_York", abbrev: "EST" },
    ],
  },
  423: {
    state: "Tennessee",
    tz: [
      { zone: "America/Chicago", abbrev: "CST" },
      { zone: "America/New_York", abbrev: "EST" },
    ],
  },
  480: { state: "Arizona", tz: [{ zone: "America/Phoenix", abbrev: "MST" }] },
  702: {
    state: "Nevada",
    tz: [{ zone: "America/Los_Angeles", abbrev: "PST" }],
  },
  // Continue adding all other area codes here...
};

// Restricted states
const notAvailableStates = ["Nevada", "Arizona", "Connecticut"];
