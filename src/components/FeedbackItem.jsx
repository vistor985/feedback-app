import Card from './shared/Card';

function FeedbackItem({ item }) {
  // const handleClick = () => {
  //   setRating(rating + 1);
  // };

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button>Click</button>
    </Card>
  );
}
export default FeedbackItem;
