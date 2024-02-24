import Section from '../components/section';
import Heading from '../components/heading';
export default function Test() {
    return (
        <>
            <Section>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
                <Section>
                    <Heading>Sub-sub-heading</Heading>
                    <Heading>Sub-sub-heading</Heading>
                    <Heading>Sub-sub-heading</Heading>
                    <Section>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                        <Heading>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </>
    );
}
