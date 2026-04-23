import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 8rem 1rem 4rem;
  width: 100%;
`;

const Badge = styled(motion.div)`
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2.5rem;
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Title = styled(motion.h2)`
  font-size: 7.5rem;
  line-height: 0.9;
  margin: 0;
  max-width: 1200px;
  background: linear-gradient(135deg, #fff 0%, #fff 40%, rgba(255,255,255,0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  letter-spacing: -0.06em;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;


const SubTitle = styled(motion.p)`
  font-size: 1.6rem;
  color: var(--color-text-dim);
  margin-top: 2.5rem;
  max-width: 750px;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const TickerContainer = styled(motion.div)`
  margin-top: 6rem;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  
  /* Fade edges */
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
`;

const TickerTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 60s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const ModelItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 2.5rem;
  border-right: 1px solid var(--glass-border);
  color: var(--color-text-dim);
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-primary);
    filter: drop-shadow(0 0 5px var(--color-primary));
  }
`;

const models = [
  "ChatGPT Plus", "Claude Pro", "Gemini Advanced", 
  "Midjourney", "Perplexity Pro", "GitHub Copilot",
  "Poe Premium", "RunwayML Gen-3", "Luma Dream Machine",
  "ElevenLabs", "Mistral Large", "Groq"
];

export const Hero: React.FC = () => (
  <HeroWrapper>
    <Badge
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      ✦ Launching Private Beta
    </Badge>
    <Title
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
    >
      Exchange AI Intelligence <br /> 
      <span style={{ color: 'var(--color-primary)', display: 'block', marginTop: '0.5rem' }}>Without Limits.</span>
    </Title>
    <SubTitle
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
    >
      The primary marketplace for AI accounts and compute credits. 
      Liquidate unused seats or find premium tools at a fraction of the cost.
    </SubTitle>

    <TickerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <TickerTrack>
        {[...models, ...models].map((model, i) => (
          <ModelItem key={i}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            {model}
          </ModelItem>
        ))}
      </TickerTrack>
    </TickerContainer>
  </HeroWrapper>
);
