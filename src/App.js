import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import Card from './components/shared/Card';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header bgColor="blue" textColor="white" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
