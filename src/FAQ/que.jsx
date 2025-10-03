import React, { useState } from "react";
import "./que.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Que = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to earn a badge?",
      answer:
        "The time required depends on the specific quest or lab. Some badges can be completed in under an hour, while others may take several hours spread across multiple labs. On average, most participants earn a badge in one to two sessions if they carefully follow the instructions."
    },
    {
      question: "What happens if my lab credits expire or I run out of time?",
      answer:
        "During Study Jams, Google provides free credits through the Cloud Skills Boost platform. If your lab session expires before you finish, you may need to restart the lab. Your progress may not always save, so it’s important to carefully manage your time and complete the lab within the given duration. If you face repeated issues, you can ask the facilitator for extra credits or guidance."
    },
    {
      question: "Can I earn the same badge again if I already have it?",
      answer:
        "No, once you’ve earned a badge on Google Cloud Skills Boost, it remains in your profile permanently. You can redo the labs for practice, but the badge will not be reissued. This makes it useful to track which skills you’ve already completed and which new ones you should target."
    },
    {
      question: "Where can I view the badges I’ve earned?",
      answer:
        "All your earned badges are stored in your Google Cloud Skills Boost profile. You can access them anytime by logging in to your account. Additionally, you can share these badges on LinkedIn, in your resume, or in professional portfolios to showcase your achievements to potential employers."
    },
    {
      question: "Do badges count towards official Google Cloud certifications?",
      answer:
        "Badges are not the same as certifications. They demonstrate hands-on skills and completed learning paths but are considered micro-credentials rather than professional certifications. However, the knowledge you gain while earning badges can directly help you prepare for official Google Cloud certification exams, such as Associate Cloud Engineer or Professional Data Engineer."
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <span>{faq.question}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Que;
