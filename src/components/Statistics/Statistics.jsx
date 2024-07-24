import {
  StatisticList,
  StatisticItem,
  StatisticValue,
  StatisticPositiveValue,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <StatisticList>
      <StatisticItem>
        Good:
        <StatisticValue>{good}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        Neutral:
        <StatisticValue>{neutral}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        Bad:
        <StatisticValue>{bad}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        Total:
        <StatisticValue>{total}</StatisticValue>
      </StatisticItem>
      <StatisticItem>
        PositivePercentage:
        <StatisticPositiveValue>{positivePercentage}%</StatisticPositiveValue>
      </StatisticItem>
    </StatisticList>
  );
};
