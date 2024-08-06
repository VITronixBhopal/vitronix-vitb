import { innoxify1, xpotech1, xpotech2, xpotech3, Charul} from '../assets'
import { xpotech,innoxify,electro } from '../assets';
import { favicon } from '../assets';
import { fCoordinator,fcoCoordinator,Aman,Nishant,Prashant,Samradh,Shrivardhan,Sagnika,Bhavya,Bhaskar,SuyashTamsa,Shivang,Aarav,Harsh } from '../assets';

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "events",
      title: "Events",
    },
    {
      id: "teams",
      title: "Team",
    },
    {
      id: "feedback",
      title: "Feedback",
    },
  ];


  export const members = [
    {
      name:"Dr. Nella Anveshkumar",
      role:"Faculty Coordinator",
      photo:fCoordinator,
      description:""
    },
    {
      name:"Dr. Anirban Bhowmick",
      role:"Faculty Co-Coordinator",
      photo:fcoCoordinator,
      description:""
    },
    {
      name:"Shrivardhan Sharma",
      role:"President",
      photo:Shrivardhan,
      description:""
    },
    {
      name:"Prashant",
      role:"Vice-President",
      photo:Prashant,
      description:""
    },
    {
      name:"Sagnika",
      role:"Electronics Head",
      photo:Sagnika,
      description:""
    },
    {
      name:"Nishant Kumar",
      role:"Documentation Chief",
      photo:Nishant,
      description:""
    },
    {
      name:"Charul Dongre",
      role:"Documentation Head",
      photo:Charul,
      description:""
    },
    {
      name:"Aman Deep Singh",
      role:"Programming Chief",
      photo:Aman,
      description:""
    },
    {
      name:"Shivang Shah",
      role:"Programming Head",
      photo:Shivang,
      description:""
    },
    {
      name:"Samradh Jindal",
      role:"Event Management Chief",
      photo:Samradh,
      description:""
    },
    {
      name:"Suyash Bandi",
      role:"Event Management Head",
      photo:Suyash,
      description:""
    },
    {
      name:"Harsh Rai",
      role:"Event Management Co-Head",
      photo:Harsh,
      description:""
    },
    {
      name:"Aarav Chowksey",
      role:"Event Management Co-Head",
      photo:Aarav,
      description:"",
    },
    
    {
      name:"Bhavya Pratap",
      role:"Social Media Head",
      photo:Bhavya,
      description:""
    },
    {
      name:"Tamsa Sandeep Karwa",
      role:"Social Media Co-Head",
      photo:Tamsa,
      description:""
    },
    {
      name:"Bhaskar Chari",
      role:"Design Chief",
      photo:Bhaskar,
      description:""
    },
    
  ];

  const experiences = [
    {
      title: "ELECTRO-CRAFT",
      icon: favicon,
      iconBg: "#383E56",
      date: "7th August 2024",
      photo: electro,
      carousel: [electro,],
      points: [
        "Special gifts for outstanding performances during the event!",
        "Engage with experts and gain insights from their vast experience.",
        "Interactive Q&A sessions to clear all your doubts.",
        "Networking opportunities with fellow electronics enthusiasts.",
      ],
    },
    {
      title: "XPOTECH",
      icon: favicon,
      iconBg: "#E6DEDD",
      date: "24th February 2024",
      photo: xpotech,
      carousel: [xpotech,xpotech1,xpotech2,xpotech3],
      points: [
        "Elevate Your Tech Experience at Xpotech – Advitya's Ultimate Tech Extravaganza!",
        "Unleash the Power of Innovation: Calling all students! Get ready to showcase your brilliance at Xpotech, the most anticipated event hosted by VITronix Club at Advitya! 🌐",
        "Connect, Collaborate, Conquer: Xpotech is not just an event; it's a vibrant community of like-minded individuals pushing the boundaries of technology. Network with fellow enthusiasts, explore collaborative opportunities, and be a part of the future! 🌐🤖",
      ],
    },
    {
      title: "InnoXify",
      icon: favicon,
      iconBg: "#383E56",
      date: "14th August 2023",
      photo: innoxify,
      carousel: [innoxify,innoxify1],
      points: [
        "The VITronix Club of VIT Bhopal University is organizing an event InnoXify: Amplifying Ideas for Impact on the 14th Aug at our Campus in Offline Mode.",
        "The event is an Ideation challenge where the students get to present their ideas in the form of presentations..",
        "Participants will be provided a problem statements, to which they have to find solutions.",
        "The top three winners will be provided with exciting prizes.",
      ],
    },
  ];

  export {experiences};
  
