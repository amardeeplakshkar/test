"use client"
import { useEffect, useState } from "react";

interface User {
  id: string; // or number depending on your schema
  username: string;
  points: number;
}

const Leaderboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]); // Define state with User type
  
    useEffect(() => {
      fetch('/api/leaderboard')
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching leaderboard:', error)); // Handle errors
    }, []);
  
    return (
      <div className="leaderboard-container">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.username} - {user.points} $COCKS</li>
          ))}
        </ul>
      </div>
    );
};
  
export default Leaderboard;
