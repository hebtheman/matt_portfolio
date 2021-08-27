import media1 from "./img/vw_med.jpg";
import media2 from "./img/sketchFlip_med.png";
import media3 from "./img/factoryFloor_med.jpg";
import media4 from "./img/userFlow_med.jpg";
import media5 from "./img/wireFrame_med.jpg";
import media6 from "./img/prototype_med.jpg";

export const data = [
    {
      subTitle: "The Design Brief",
      title:
        "Creating Production Management Software for manufacturing VW Camper Van Roofs",
      description:
        "The client is a VW camper van roof conversion and internal outfitter (beds & seating) based in Somerset. Due to the current situation with the pandemic and the public unable to go abroad for holidays, the client has seen a massive increase in sales. This has also meant that their production operations have been pushed to their limit. They needed an application that would help them to manage and stream line their operations.",
      imgSrc: media1,
      altText: "VW",
    },
    {
      subTitle: "Initial Sketches",
      title: "Coming Up With Initial Ideas And Getting Them On to Paper",
      description:
        "After discussing their situation with the client, we decided the best solution would be a web site that would allow admin to track orders and manufacturing floor jobs from start to finish. They would also need an app that would allow workers to take on new jobs and document their progress. I started by sketching out what I thought the app might look like and realized users would need a fast and efficient way to input information. We came to the conclusion that scanning a QR code would be the fastest and easiest way to for users to achieve this.",
      imgSrc: media2,
      altText: "sketch",
    },
    {
      subTitle: "Client Visit",
      title: "We Needed To See Their Manufacturing Plant In Action",
      description:
        "After coming up with an initial design plan and engaging in further discussions with the client, I suggested we go to the clients premises to get a better understanding of their operations. Once there, we were able to see their production set up first hand and after talking with employees realized they already had a system in place, albeit on paper and white boards.",
      imgSrc: media3,
      altText: "factory floor",
    },
    {
      subTitle: "Working Out User Flow & Site Maps",
      title: "Having A Better Understanding Of The Client Was A Big Help",
      description:
        "After visiting the client I was able to adapt my initial sketches to their existing processes, so as to make user adoption as comfortable as possible. It was also at this point we realized it would be good to have a large screen on the manufacturing floor mimicking the data we saw on the white board they were using to record jobs. After this, I also started to plan the admin site, it wasn’t too difficult to do with knowledge I now had. I was able to put together a site map as well as come up with views for showing incoming and in-progress jobs.",
      imgSrc: media4,
      altText: "user flow",
    },
    {
      subTitle: "Making the Wireframe",
      title: "Fleshing Out The Design",
      description:
        "With the User Flow and site maps done, I began to make the wire frames. I also put together various excel sheets to try and work out the numerous fields that would be required for each section of the application (i.e. manufacturing jobs). I discussed this with the client after sending some initial thoughts and then added this into my wire frame.",
      imgSrc: media5,
      altText: "wire frame",
    },
    {
      subTitle: "Working Prototype",
      title: "Putting It All Together",
      description:
        "I was now able to put together a working prototype in Figma. Following the user flow and wireframes I had already made. The application prototype allowed users to take a job from start to finish, whilst the admin site was essentially a functioning site, but obviously with dummy data. I sent both prototypes to the client and they were pleased with the result. With the clients go ahead, we started building the site in nextJs and the mobile application in Ionic. ",
      imgSrc: media6,
      altText: "prototype",
    },
]
