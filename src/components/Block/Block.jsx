import { StyledDiv } from './Block.styled.js';
import Reveal from 'components/Reveal/index.js';

const Block = () => {
  return (
    <StyledDiv>
      <Reveal>
        <h1 style={{ marginBottom: 12 }}>Lorem ipsum dolor sit amet.</h1>
      </Reveal>
      <Reveal>
        <h2 style={{ marginBottom: 12 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>
      </Reveal>
      <Reveal>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
          totam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </Reveal>
    </StyledDiv>
  );
};

export default Block;
