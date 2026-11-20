
/* config.js
   SMRTTECH 4SC3 - Week 5 Web Showcase
   Mini Project A - Bayview Avenue and Finch Avenue East
*/

window.SITE_CONFIG = {
  pageTitle: "SMRTTECH 4SC3 | Traffic Simulation Project",
  homeUrl: "https://sohaia11.github.io/",

  // STUDENT PROFILE
  hero: {
    profileImage: "assets/img/image1.jpg",
    courseTag: "SMRTTECH 4SC3",
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Aaron Sohail",
    program: "BTech Automation Engineering",
    university: "McMaster University, Canada",
    email: "sohaia11@mcmaster.ca"
  },

  // ACADEMIC DISCLAIMER
  disclaimer: {
    short:
      "Academic traffic simulation project completed for SMRTTECH 4SC3. Results are for educational purposes only.",

    long:
      "This website presents a student academic project completed at McMaster University. All simulations, results, and potential improvements are for educational purposes only. The findings do not represent an official traffic study, engineering recommendation, or endorsement by the City of Toronto.",

    videoOverlaySuggestion:
      "Academic Project | Educational Use Only"
  },

  // GREY COLOUR THEME
  theme: {
    heroBg: "#454b54",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#64748b"
  },

  dividers: {
    dividerBg: "#e5e7eb",
    dividerText: "#374151"
  },

  footer: {
    footerBg: "#454b54",
    footerText: "#ffffff",
    footerBorder: "#64748b",

    homeLinkText: "RoadwayVR",

    templateCredit:
      "This academic showcase template was developed by RoadwayVR.",

    templateCreditLinkText:
      "Learn more at RoadwayVR.com",

    templateCreditUrl: "https://roadwayvr.com"
  },

  // PROJECT TITLE AND VIDEO
  intro: {
    projectTitleLabel: "Project Title",

    projectTitle:
      "Traffic Simulation and Scenario Analysis at Bayview Avenue and Finch Avenue East",

    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",

    heroVideoAlt:
      "SUMO traffic simulation demonstrating HDV and CAV scenarios",

    videoCaption:
      "Simulation Demonstration: 100% Human-Driven Vehicles (HDV) and 100% Connected and Autonomous Vehicles (CAV)"
  },

  // INTRODUCTION
  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Traffic congestion affects vehicle speeds and roadway efficiency at urban intersections.",
      "SUMO allows traffic networks and vehicle behaviour to be studied through simulation.",
      "Connected and autonomous vehicles may influence traffic flow through different driving behaviours.",
      "This project examines the Bayview Avenue and Finch Avenue East intersection in Toronto."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "Heavy traffic demand can create congestion and reduce vehicle speeds.",
      "Accurate roadway models are needed to represent realistic vehicle movements.",
      "The impact of autonomous vehicles on traffic performance is uncertain.",
      "Signal timing adjustments need testing to determine whether they improve traffic conditions."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Select the Bayview Avenue and Finch Avenue East study area and develop its SUMO roadway network.",
      "Establish a 100% HDV baseline and analyze the speed-density relationship.",
      "Compare traffic performance between 100% HDV and 100% CAV scenarios.",
      "Evaluate a traffic signal timing adjustment to identify potential improvements.",
      "Present the project methodology and findings through a website showcase."
    ]
  },

  // METHODOLOGY OVERVIEW
  overview: {
    title: "Methodology",

    steps: [
      {
        title: "Step 1: Study Area Selection",
        text:
          "Select the Bayview Avenue and Finch Avenue East intersection and review its road layout.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: Road Network and HDV Baseline",
        text:
          "Develop the SUMO road network and simulate traffic using 100% human-driven vehicles.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: CAV Scenario Comparison",
        text:
          "Simulate 100% connected and autonomous vehicles and compare speed-density results.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Traffic Signal Intervention",
        text:
          "Adjust the traffic signal green time and evaluate changes in traffic performance.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  // DETAILED METHODOLOGY
  implementation: {
    title: "Methodology Steps (Simulation Modules)",

    modules: [
      {
        title: "Module 1: Study Area and Road Network Development",
        bullets: [
          {
            text:
              "Select Bayview Avenue and Finch Avenue East in Toronto as the study intersection."
          },
          {
            text:
              "Review GIS data to identify road geometry, lanes, and surrounding connections."
          },
          {
            text:
              "Develop the roadway network in SUMO NetEdit with appropriate turning movements."
          }
        ],
        image: "assets/img/image2.jpg"
      },

      {
        title: "Module 2: Baseline Traffic Simulation (100% HDV)",
        bullets: [
          {
            text:
              "Configure vehicle routes, traffic demand, and intersection signal controls."
          },
          {
            text:
              "Run the baseline simulation using 100% human-driven vehicles."
          },
          {
            text:
              "Collect vehicle speed and density data from the selected roadway edge E66."
          }
        ],
        image: "assets/img/image3.jpg"
      },

      {
        title: "Module 3: Autonomous Vehicle Simulation (100% CAV)",
        bullets: [
          {
            text:
              "Replace the HDV fleet with 100% connected and autonomous vehicles."
          },
          {
            text:
              "Adjust vehicle spacing, time headway, acceleration, and deceleration settings."
          },
          {
            text:
              "Compare HDV and CAV speed-density results under the same reported traffic conditions."
          }
        ],
        image: "assets/img/image4.jpg"
      },

      {
        title: "Module 4: Traffic Signal Timing Intervention",
        bullets: [
          {
            text:
              "Identify congestion along edge E66 using the baseline simulation results."
          },
          {
            text:
              "Increase the green-light duration serving E66 from 27 to 30 seconds."
          },
          {
            text:
              "Compare before-and-after speed-density results to assess possible traffic improvements."
          }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

  // RESULTS AND DISCUSSION
  results: {
    title: "Results & Potential Improvements",

    subtitle:
      "Speed-density results from SUMO were used to compare the HDV baseline and CAV scenario at Bayview Avenue and Finch Avenue East. A separate signal timing intervention was also evaluated.",

    charts: {
      left: {
        title:
          "Base Scenario - 100% Human-Driven Vehicles (HDV)",
        src: "assets/img/image6.jpg",
        alt:
          "HDV baseline speed-density graph for roadway edge E66."
      },

      right: {
        title:
          "Scenario 1 - 100% Connected and Autonomous Vehicles (CAV)",
        src: "assets/img/image7.jpg",
        alt:
          "CAV scenario speed-density graph for roadway edge E66."
      }
    },

    discussionTitle: "Results & Discussion",

    discussionBullets: [
      "The HDV baseline produced a fitted free-flow speed of 8.0 m/s, a jam density of 83 veh/km, and an R² value of 0.904.",

      "The CAV scenario produced a fitted free-flow speed of 7.4 m/s, a jam density of 92 veh/km, and an R² value of 0.914.",

      "HDVs showed slightly higher predicted speeds at lower densities, while CAVs performed slightly better at higher densities.",

      "The signal timing intervention increased the green time serving edge E66 from 27 to 30 seconds.",

      "After the adjustment, the fitted free-flow speed increased to 10.0 m/s. However, the overall results were mixed and did not confirm a consistent improvement.",

      "Further simulation runs and additional traffic measurements would help evaluate the effectiveness of the signal timing adjustment."
    ]
  },

  // TEAM AND ACKNOWLEDGMENTS
  team: {
    title: "Team & Acknowledgments",

    subtitle:
      "This academic project was completed for SMRTTECH 4SC3 at McMaster University. The website presents the simulation methodology, scenario comparisons, and key findings.",

    members: [
      {
        name: "Aaron Sohail",
        role:
          "Road Network Development, HDV and CAV Traffic Simulation, Scenario Analysis, and Web Showcase"
      }
    ],

    acknowledgments: [
      "Course: SMRTTECH 4SC3 - Smart Cities and Communities",
      "Institution: McMaster University",
      "Course Instructor: Dr. Marjan Alavi",
      "Lab Instructor: Dr. Ahmad Mohammadi",
      "Project Team: Aaron Sohail, Kevin Nguyen, and Tri Pham",
      "Study Area: Bayview Avenue and Finch Avenue East, Toronto",
      "Tools: SUMO, SUMO NetEdit, and Greenshields Speed-Density Analysis"
    ],

    repoLabel: "Project Repository",
    repoUrl:
      "https://github.com/sohaia11/sohaia11.github.io"
  }
};
