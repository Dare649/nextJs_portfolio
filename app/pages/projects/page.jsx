import Card from "@components/Card";
import Tezz from "@public/assets/images/Tezz.png";
import dialiali from "@public/assets/images/dialaliimg.png";
import firazi from "@public/assets/images/firazi.png";
import sell from "@public/assets/images/sell.png";


const Projects = () => {
  return (
    <section className='py-20' id="projects">
        <h1 className='text-center capitalize font-bold text-4xl'>projects</h1>
        <div className="flex flex-col">
            <div className="content lg:px-10 sm:px-0 gap-5 flex lg:flex-row sm:flex-col items-center justify-between py-10">
                <Card
                    alt={"damilare portfolio"}
                    src={Tezz}
                    text={"Supported in the building of Firazi  an application that connects travellers and users who wants to send their packages to other states or country"}
                    title={"tezz crm"}
                />
                <Card
                    alt={"damilare portfolio"}
                    src={dialiali}
                    text={"This is the Admin side of the applications that allows users manage reports and activities on the application. I was solely tasked to start the development of the frontend of the application"}
                    title={"dialali"}
                />
                <Card
                    alt={"damilare portfolio"}
                    src={firazi}
                    text={"This is a CRM which i was assigned to build and deploy the UI during an interview session."}
                    title={"firazi"}
                />
                <Card
                    alt={"damilare portfolio"}
                    src={sell}
                    text={"This is an affiliate marketing platform, an ecosystem of merchants, partners and customers of which I'm personally developing the frontend of the project."}
                    title={"Sell4me"}
                />
            </div>
            {/* <div className="content lg:px-10 sm:px-0 gap-5 flex lg:flex-row sm:flex-col items-center justify-between py-10">
            <Card
                alt={"damilare portfolio"}
                src={Tezz}
                text={"Supported in the building of Firazi  an application that connects travellers and users who wants to send their packages to other states or country"}
                title={"tezz crm"}
            />
            <Card
                alt={"damilare portfolio"}
                src={dialiali}
                text={"This is the Admin side of the applications that allows users manage reports and activities on the application. I was solely tasked to start the development of the frontend of the application"}
                title={"dialali"}
            />
            <Card
                alt={"damilare portfolio"}
                src={firazi}
                text={"This is a CRM which i was assigned to build and deploy the UI during an interview session."}
                title={"firazi"}
            />
            </div> */}
        </div>
    </section>
  )
}

export default Projects
