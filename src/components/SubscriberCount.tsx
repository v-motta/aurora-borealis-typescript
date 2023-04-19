import { useState, useEffect } from 'react';

interface SubscriberCountProps {
  channelId: string;
}

export default function SubscriberCount({ channelId }: SubscriberCountProps) {
  const [subscriberCount, setSubscriberCount] = useState<number>();

  useEffect(() => {
    async function fetchSubscriberCount() {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=AIzaSyDZjVEcVoZksM0r7AQ7wE2tgxeOWA9q5Js`);
      const data = await response.json();
      setSubscriberCount(data.items[0].statistics.subscriberCount);
    }
    fetchSubscriberCount();
  }, [channelId]);

  return (
    <div className="d-flex flex-column align-items-center">
      {subscriberCount && (
        <p className="text-white fw-bold fs-5 m-0">{subscriberCount}</p>
      )}
        <p className="text-white fw-bold fs-5 m-0">inscritos</p>
    </div>
  );
}