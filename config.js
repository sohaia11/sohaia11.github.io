// config.js (Students edit only this file)

window.SITE_CONFIG = {
  pageTitle: "Traffic Simulation Case Study | SMRTTECH 4SC3",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    courseTag: "SMRTTECH 4SC3",

    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Aaron Sohail",
    program: "BTech Automation Engineering",
    university: "McMaster University, Canada",
    email: "sohaia11@mcmaster.ca"
  },

  disclaimer: {
    short:
      "This academic project was completed for educational purposes. The findings are based on traffic simulations and do not represent official traffic assessments.",

    long:
      "This website presents an academic traffic simulation project completed at McMaster University. All scenarios, results, and recommendations are based on simulation data and are intended for educational purposes only. The findings do not represent official traffic studies, engineering recommendations, or endorsements by the City of Toronto.",

    videoOverlaySuggestion:
      "Academic Project | Educational Use Only | Simulation-Based Results"
  },

  // Updated grey colour theme
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

    templateCreditUrl:
      "https://roadwayvr.com"
  },

  // Project Introduction
  intro: {
    projectTitleLabel: "Project Title",

    projectTitle:
      "Traffic Simulation and Scenario Analysis at Bayview Avenue and Finch Avenue East",

    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Traffic simulation project overview",

    videoCaption:
      "Project Overview: Road Network Development, Traffic Simulation, Scenario Comparison, and Results"
  },

  // Introduction Section
  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Traffic congestion at urban intersections affects vehicle movement, travel time, and overall road efficiency.",

      "Traffic simulation tools such as SUMO allow roadway networks and vehicle behaviour to be studied under different conditions.",

      "Connected and autonomous vehicles (CAVs) may influence traffic flow through changes in vehicle spacing and driving behaviour.",

      "This project focuses on the Bayview Avenue and Finch Avenue East intersection in Toronto, Ontario."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "Urban intersections experience congestion due to traffic demand, signal timing, and vehicle interactions.",

      "Accurate roadway networks are needed to represent lane connections, turning movements, and traffic flow.",

      "The impact of connected and autonomous vehicles on traffic performance is uncertain.",

      "Traffic signal adjustments must be evaluated to determine whether they improve simulated road conditions."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Develop a digital roadway network of the Bayview Avenue and Finch Avenue East intersection using SUMO.",

      "Establish a baseline traffic simulation using 100% human-driven vehicles (HDVs).",

      "Compare traffic performance between 100% HDV and 100% CAV scenarios using speed-density relationships.",

      "Evaluate a traffic signal timing adjustment and assess its impact on traffic conditions."
    ]
  },

  // Methodology Overview
  overview: {
    title: "Methodology",

    steps: [
      {
        title: "Step 1: Road Network Development",

        text:
          "Develop the Bayview Avenue and Finch Avenue East roadway network in SUMO, including road geometry, lanes, and turning connections.",

        image: "assets/img/image2.jpg"
      },

      {
        title: "Step 2: Baseline Traffic Simulation (HDV)",

        text:
          "Simulate human-driven vehicle traffic and establish baseline speed-density results for the selected roadway edge.",

        image: "assets/img/image3.jpg"
      },

      {
        title: "Step 3: Connected and Autonomous Vehicle Simulation",

        text:
          "Test a 100% CAV scenario and compare its speed-density relationship with the HDV baseline.",

        image: "assets/img/image4.jpg"
      },

      {
        title: "Step 4: Traffic Signal Intervention",

        text:
          "Adjust traffic signal timing and evaluate changes in simulated traffic performance.",

        image: "assets/img/image5.jpg"
      }
    ]
  },

  // Detailed Methodology
  implementation: {
    title: "Methodology Steps (Simulation Modules)",

    modules: [
      {
        title: "Module 1: Road Network Development (SUMO)",

        bullets: [
          {
            text:
              "Use the study-area GIS map to develop the Bayview Avenue and Finch Avenue East roadway network in SUMO NetEdit."
          },

          {
            text:
              "Create road connections, lane configurations, turning movements, and intersection geometry."
          },

          {
            text:
              "Review road continuity and vehicle connections to support realistic traffic movement."
          }
        ],

        image: "assets/img/image2.jpg"
      },

      {
        title: "Module 2: Baseline Traffic Simulation (100% HDV)",

        bullets: [
          {
            text:
              "Configure traffic demand, vehicle routes, and traffic signal controls for the study intersection."
          },

          {
            text:
              "Run the baseline simulation using 100% human-driven vehicles."
          },

          {
            text:
              "Collect vehicle speed and density observations from the selected roadway edge E66."
          }
        ],

        image: "assets/img/image3.jpg"
      },

      {
        title: "Module 3: Connected and Autonomous Vehicle Simulation",

        bullets: [
          {
            text:
              "Replace the baseline vehicle type with 100% connected and autonomous vehicles."
          },

          {
            text:
              "Adjust vehicle behaviour parameters, including minimum spacing, time headway, acceleration, and deceleration."
          },

          {
            text:
              "Compare HDV and CAV speed-density results under the same reported roadway and traffic conditions."
          }
        ],

        image: "assets/img/image4.jpg"
      },

      {
        title: "Module 4: Traffic Signal Timing Intervention",

        bullets: [
          {
            text:
              "Identify congestion along the selected roadway edge E66 using baseline simulation results."
          },

          {
            text:
              "Increase the traffic signal green time serving E66 from 27 seconds to 30 seconds."
          },

          {
            text:
              "Compare the baseline and adjusted scenarios to evaluate potential improvements in traffic performance."
          }
        ],

        image: "assets/img/image5.jpg"
      }
    ]
  },

  // Results Section
  results: {
    title: "Results & Potential Improvements",

    subtitle:
      "Speed-density results from the SUMO simulations were used to compare human-driven vehicles, connected and autonomous vehicles, and a traffic signal timing intervention at the Bayview Avenue and Finch Avenue East intersection.",

    charts: {
      left: {
        title:
          "Baseline Scenario — 100% Human-Driven Vehicles (HDV)",

        src: "assets/img/image6.jpg",

        alt:
          "Speed-density graph for the baseline human-driven vehicle simulation on edge E66."
      },

      right: {
        title:
          "Scenario 1 — 100% Connected and Autonomous Vehicles (CAV)",

        src: "assets/img/image7.jpg",

        alt:
          "Speed-density graph for the connected and autonomous vehicle simulation on edge E66."
      }
    },

    discussionTitle: "Results & Discussion",

    discussionBullets: [
      "The HDV baseline produced a fitted free-flow speed of 8.0 m/s and a jam density of 83 vehicles/km.",

      "The CAV scenario produced a fitted free-flow speed of 7.4 m/s and a higher jam density of 92 vehicles/km.",

      "At lower traffic densities, the HDV scenario showed slightly higher predicted speeds, while the CAV scenario performed slightly better at higher densities.",

      "The traffic signal intervention increased the green time serving edge E66 from 27 to 30 seconds.",

      "Following the signal adjustment, the fitted free-flow speed increased from 8.0 to 10.0 m/s. However, the overall results were mixed and did not confirm a consistent improvement.",

      "Further testing using additional simulation runs, queue lengths, vehicle delays, and traffic volumes would help determine whether the signal adjustment provides reliable benefits."
    ]
  },

  // Team and Acknowledgments
  team: {
    title: "Team & Acknowledgments",

    subtitle:
      "This project was completed as part of SMRTTECH 4SC3 at McMaster University. The study involved roadway network development, traffic simulation, scenario comparison, and analysis of potential traffic improvements.",

    members: [
      {
        name: "Aaron Sohail",
        role:
          "Road Network Development, Traffic Simulation, Scenario Analysis, and Results"
      },

      {
        name: "Kevin Nguyen",
        role:
          "Project Team Member"
      },

      {
        name: "Tri Pham",
        role:
          "Project Team Member"
      }
    ],

    acknowledgments: [
      "Course: SMRTTECH 4SC3 – Smart Cities and Communities",

      "Institution: McMaster University",

      "Study Location: Bayview Avenue and Finch Avenue East, Toronto, Ontario",

      "Simulation Software: SUMO and SUMO NetEdit",

      "Analysis: Greenshields Speed-Density Model",

      "Project Type: Academic Traffic Simulation and Scenario Analysis"
    ],

    repoLabel: "Project Repository",
    repoUrl: ""
  }
};
