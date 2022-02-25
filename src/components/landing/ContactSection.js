import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';


export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-cyan-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Penn Medicine">
                A responsive, future-ready hospital management system 
                can be customized based on patient volumes, staff size, 
                facility infrastructure, nature of services offered.
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard 
                    icon="stars" 
                    title="Implementation">
                        Our H.M.S Consulting services focus on identifying
                         and bottlenecks in your hospital facility management.
                    </ContactCard>
                    <ContactCard 
                    icon="insert_chart" 
                    title="Training">
                    HMS training is conducted phase-wise and based on    
                    individual skill and need. It is also provided periodically.
                    </ContactCard>
                    <ContactCard 
                    icon="launch" 
                    title="After Sale Support">
                        We guarantee dedicated HMS after sales support 
                        for our clients at any stage of operation.
                    </ContactCard>
                </div>

                
            </div>
        </section>
    );
}
