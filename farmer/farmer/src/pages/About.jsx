import React from "react";
import styled from "styled-components";

const Container = styled.section`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a73e8;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
`;

const About = ({ language }) => {
  const content = {
    en: {
      title: "About CropInsure",
      text: `CropInsure is a cutting-edge crop insurance platform designed to empower farmers by providing transparent, blockchain-backed policies.
      We integrate live crop monitoring and automated claim processes to make farming safer and more profitable. Our mission is to make insurance accessible, simple, and trustworthy for all farmers.`,
    },
    hi: {
      title: "CropInsure के बारे में",
      text: `CropInsure एक अत्याधुनिक फसल बीमा प्लेटफ़ॉर्म है जो किसानों को पारदर्शी, ब्लॉकचेन-आधारित नीतियां प्रदान करके सशक्त बनाता है।
      हम लाइव फसल निगरानी और स्वचालित दावा प्रक्रियाओं को एकीकृत करते हैं ताकि खेती को अधिक सुरक्षित और लाभकारी बनाया जा सके। हमारा मिशन सभी किसानों के लिए बीमा को सुलभ, सरल और विश्वसनीय बनाना है।`,
    },
    te: {
      title: "CropInsure గురించి",
      text: `CropInsure ఒక ఆధునిక పంట బీమా ప్లాట్‌ఫారం, ఇది పారదర్శకమైన, బ్లాక్‌చెయిన్ ఆధారిత పాలసీలను అందిస్తూ రైతులను సాధికారత కల్పిస్తుంది.
      మనం ప్రత్యక్ష పంట పరిశీలన మరియు స్వయంచాలక క్లెయిమ్ ప్రక్రియలను కలపడం ద్వారా వ్యవసాయాన్ని మరింత భద్రత మరియు లాభదాయకత కలిగించే ప్రయత్నం చేస్తాము. మన లక్ష్యం అన్ని రైతులకు బీమాను సులభంగా, సరళంగా, విశ్వసనీయంగా అందించడం.`,
    },
  };

  const { title, text } = content[language] || content.en;

  return (
    <Container>
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
    </Container>
  );
};

export default About;
