import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProcessWrapper = styled.section`
  padding: 8rem 0;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled(motion.div)`
  padding: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(0, 242, 254, 0.05), transparent);
  }
`;

const StepNumber = styled.div`
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 800;
  margin-bottom: 1.5rem;
  opacity: 0.8;
`;

const StepTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const StepDescription = styled.p`
  color: var(--color-text-dim);
  font-size: 1.1rem;
  line-height: 1.6;
`;

const steps = [
  {
    title: "Connect",
    description: "Link your AI provider accounts via secure OAuth or credit bridge."
  },
  {
    title: "List",
    description: "Set your price and availability. Our smart contract handles the escrow."
  },
  {
    title: "Earn",
    description: "Receive instant payouts in USDC or credits as your capacity is utilized."
  }
];

export const Process: React.FC = () => (
  <ProcessWrapper>
    <Title>How it Works</Title>
    <StepsGrid>
      {steps.map((step, i) => (
        <StepCard
          key={i}
          className="glass-panel"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <StepNumber>0{i + 1}</StepNumber>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
        </StepCard>
      ))}
    </StepsGrid>
  </ProcessWrapper>
);
