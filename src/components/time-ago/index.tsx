import { Text } from '@chakra-ui/react';
import dayjs from 'dayjs';

type Props = {
  date: string;
};

const TimeAgo = ({ date }: Props) => {
  const timeAgo = dayjs().diff(dayjs(date), 'year', true);

  return (
    <Text>
      📅
      {' '}
      {timeAgo.toFixed(4)}
      {' '}
      years ago
    </Text>
  );
};

export default TimeAgo;
