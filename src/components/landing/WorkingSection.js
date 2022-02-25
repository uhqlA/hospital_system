import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork1.jpg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-red-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="blue" icon="stars" title="Awarded Agency">
                    We understand the nature of your service and renders end-to-end HMS integration with existing systems.


                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Consultation"
                    >
                        Our HMS Consulting services focus on identifying
                         and bottlenecks in your hospital facility management.
                    </StatusCard>
                    <StatusCard
                        color="blue"
                        icon="security"
                        title="Intergration"
                    >
                       We understand the nature of your         
                       service and renders end-to-end HMS 
                       integration with existing systems.
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="6xl" />
                        </div>
                        <H4 color="blue">Working with us is a pleasure</H4>
                        <LeadText color="black">
                        Looking for hospital management software that suits your needs? We are here!
                        </LeadText>
                        <LeadText color="black">
                        H.M.S aims to provide sophisticated technological support to your healthcare facility through 
                        its Hospital Management System (HMS) and enhance patient experience while simplifying your
                         administrative tasks.
                        </LeadText>
                        <a
                            href="/"
                            className="font-large text-light-blue-500 mt-2 inline-block"
                        >
                            Get Memo
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="blue">Team work Services</H6>
                                <Paragraph color="black">
                                A new generation hospital management system aims to streamline healthcare center processes
                                 in Kenya by offering advanced technology at affordable prices. Additionally, 
                                our dedicated Lab Information System (LIS) empowers clinical decision making by 
                                generating accurate and timely health reports.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
