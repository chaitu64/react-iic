import React, { useState } from 'react';
import styles from './sih2026.module.css';

const initialSih2026Data = [
  { id: 'B001', name: 'Team Alpha', branch: 'CSE', faculty: 'Dr. Ravi Kumar', date: '25-08-2026', status: 'Pending' },
  { id: 'B002', name: 'Team Innovators', branch: 'IT', faculty: 'Dr. Priya Sharma', date: '27-08-2026', status: 'Completed' },
  { id: 'B003', name: 'Code Warriors', branch: 'CSE', faculty: 'Dr. Suresh', date: '29-08-2026', status: 'Pending' },
  { id: 'B004', name: 'Digital Mavericks', branch: 'ECE', faculty: 'Dr. Ananya Reddy', date: '24-08-2026', status: 'Pending' },
  { id: 'B005', name: 'Future Techies', branch: 'EEE', faculty: 'Dr. Sandeep Kumar', date: '26-08-2026', status: 'Completed' },
  { id: 'B006', name: 'Pixel Perfect', branch: 'CSE', faculty: 'Dr. Lakshmi Devi', date: '28-08-2026', status: 'Pending' },
  { id: 'B007', name: 'Cyber Shield', branch: 'IT', faculty: 'Dr. Rajesh Gupta', date: '30-08-2026', status: 'Pending' },
  { id: 'B008', name: 'Quantum Leap', branch: 'ECE', faculty: 'Dr. Meera Joshi', date: '23-08-2026', status: 'Completed' },
  { id: 'B009', name: 'Data Wizards', branch: 'CSE', faculty: 'Dr. Venkat Rao', date: '31-08-2026', status: 'Pending' },
  { id: 'B010', name: 'AI Pioneers', branch: 'EEE', faculty: 'Dr. Priyanka Singh', date: '22-08-2026', status: 'Pending' }
];

function Sih2026({ isAdmin = false }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [teams, setTeams] = useState(initialSih2026Data);

  const filteredData = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.branch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id, newStatus) => {
    setTeams(prevTeams =>
      prevTeams.map(team =>
        team.id === id ? { ...team, status: newStatus } : team
      )
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>SIH 2026</h1>

      {/* Top-right Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search teams, ID, branch..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Table Container */}
      <div className={styles.tableWrapper}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Batch ID</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Faculty Assigned</th>
              <th>Date of Review</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((team) => (
                <tr key={team.id}>
                  <td data-label="Batch ID">{team.id}</td>
                  <td data-label="Name" className={styles.teamName}>{team.name}</td>
                  <td data-label="Branch">{team.branch}</td>
                  <td data-label="Faculty Assigned">{team.faculty}</td>
                  <td data-label="Date of Review">{team.date}</td>
                  <td data-label="Status">
                    {isAdmin ? (
                      <select
                        value={team.status}
                        onChange={(e) => handleStatusChange(team.id, e.target.value)}
                        className={`${styles.statusDropdown} ${
                          team.status === 'Completed' ? styles.completed : styles.pending
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </select>
                    ) : (
                      <span
                        className={`${styles.statusBadge} ${
                          team.status === 'Completed' ? styles.completed : styles.pending
                        }`}
                      >
                        {team.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className={styles.noData}>
                  No matching teams found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sih2026;