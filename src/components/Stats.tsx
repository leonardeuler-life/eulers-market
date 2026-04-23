import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StatsWrapper = styled.section`
  padding: 4rem 0;
  width: 100%;
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.01);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.04em;
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--color-text-dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`;

const stats = [
  { value: "$14k", label: "Volume Traded" },
  { value: "450+", label: "Active Nodes" },
  { value: "24ms", label: "Avg Latency" },
  { value: "99.9%", label: "Uptime" }
];

export const Stats: React.FC = () => (
  <StatsWrapper>
    <StatsGrid>
      {stats.map((stat, i) => (
        <StatItem
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <StatValue>{stat.value}</StatValue>
          <StatLabel>{stat.label}</StatLabel>
        </StatItem>
      ))}
    </StatsGrid>
  </StatsWrapper>
);
