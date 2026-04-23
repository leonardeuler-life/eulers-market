import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesWrapper = styled.section`
  padding: 8rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const FeatureCard = styled(motion.div)`
  padding: 3rem;
  transition: transform 0.3s ease;
  
  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(0, 242, 254, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: var(--color-text-dim);
  line-height: 1.6;
`;

const features = [
  {
    title: "Zero-Knowledge Escrow",
    text: "Trade compute capacity without ever exposing your private API keys or credentials.",
    icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  },
  {
    title: "Instant Liquidity",
    text: "Convert unused monthly subscription value into spendable credits instantly.",
    icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Global Scale",
    text: "Access high-performance GPU clusters and premium AI models from any region.",
    icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
  }
];

export const Features: React.FC = () => (
  <FeaturesWrapper>
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Engineered for Performance</h2>
      <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
        The infrastructure that makes AI subscription secondary markets possible.
      </p>
    </div>
    <Grid>
      {features.map((feature, idx) => (
        <FeatureCard 
          key={idx} 
          className="glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <IconWrapper>{feature.icon}</IconWrapper>
          <CardTitle>{feature.title}</CardTitle>
          <CardText>{feature.text}</CardText>
        </FeatureCard>
      ))}
    </Grid>
  </FeaturesWrapper>
);
