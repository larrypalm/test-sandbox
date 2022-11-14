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
            <Heading>Jag är en header</Heading>
        </div>
    )
}

export default firstFile;