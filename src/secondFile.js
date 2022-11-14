import styled from '@emotion/styled'

const Heading = styled('h1')`
  color: red;
`;

const Paragraph = styled('p')`
  color: blue;
`;

const Image = styled('img')`
  background: coral;
`;

const firstFile = () => {
    return (
        <div>
            <Heading>SECONDFILE</Heading>
            <Paragraph>Jag är en Paragrapharagraf</Paragraph>
        </div>
    )
}

export default firstFile;