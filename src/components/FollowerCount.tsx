import { useState, useEffect } from 'react';

interface FollowerCountProps {
  username: string;
}

export default function FollowerCount({ username }: FollowerCountProps) {
  const [subscriberCount, setSubscriberCount] = useState<number>();
  const token = 'AAAAAAAAAAAAAAAAAAAAAO5VggEAAAAA5vXsMB7%2BjxvpbbkPDIYhK5CVhII%3Dvrzz88hXqsDlN57CLsh30lg2QernCPzsUqAnTgenMuuEgQfm80'

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  headers.append('Content-Type', 'application/json');

  useEffect(() => {
    async function fetchSubscriberCount() {
      const response = await fetch(`https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`,{ headers: headers });
      const data = await response.json();
      console.log(data);
      // setSubscriberCount(data.items[0].statistics.subscriberCount);
    }
    fetchSubscriberCount();
  }, [username]);

  return (
    <div className="d-flex flex-column align-items-center">
      {subscriberCount && (
        <p className="text-white fw-bold fs-5 m-0">{username}</p>
      )}
        <p className="text-white fw-bold fs-5 m-0">inscritos</p>
    </div>
  );
}