import { ButtonWraper, ButtonFeedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWraper>
      {options.map(option => (
        <ButtonFeedback
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </ButtonFeedback>
      ))}
    </ButtonWraper>
  );
};
