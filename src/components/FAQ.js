// src/components/FAQ.js
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: 'What is Formula One?',
    answer:
      'Formula One (F1) is the highest class of international single-seater auto racing sanctioned by the Fédération Internationale de l\'Automobile (FIA).',
  },
  {
    question: 'How are F1 cars different from regular cars?',
    answer:
      'F1 cars are designed for extreme speed and agility with advanced aerodynamics, lightweight materials, and powerful engines.',
  },
  {
    question: 'Which team has the most championships?',
    answer:
      'As of now, Ferrari holds the record for the most Constructors\' Championships in F1 history.',
  },
  {
    question: 'Who is the most successful F1 driver?',
    answer:
      'Lewis Hamilton and Michael Schumacher are tied with the most World Drivers\' Championship titles, each winning seven times.',
  },
];

const FAQ = () => {
  return (
    <Box sx={{ my: 4, mx: 2 }}>
      <Typography
        variant="h4"
        color="primary"
        sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}
      >
        Frequently Asked Questions
      </Typography>
      {faqData.map((item, index) => (
        <Accordion key={index} sx={{ backgroundColor: '#f0f0f0' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
