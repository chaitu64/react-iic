import React, { useEffect, useState } from 'react';
import styles from './sih2026.module.css';
import { supabase } from '../../lib/supabase';

function Sih2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [teams, setTeams] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  // 1. Frontend API Fetching
  const fetchParticipants = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('sih_2026_registrations')
        .select('*')
        .order('batch_id', { ascending: true });

      if (error) {
        throw error;
      }

      if (data) {
        const apiTeams = data.map(p => {
          return {
            id: p.batch_id ? `B${p.batch_id.toString().padStart(3, '0')}` : p.id.toString(),
            name: p.team_lead_name || 'Unknown Team',
            branch: p.branch || 'N/A',
            register_number: p.register_number || 'N/A',
            faculty: p.faculty_assigned || 'N/A',
            date: p.review_date || p.reviewed_at?.split('T')[0] || 'N/A',
            status: (p.review_status || '').toLowerCase() === 'completed' ? 'Completed' : 'Pending',
            originalBatchId: p.batch_id
          };
        });
        setTeams(apiTeams);
      }
    } catch (error) {
      console.error("Error fetching participants:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('isAdmin') === 'true' && localStorage.getItem('token')) {
      setIsAdmin(true);
    }
    fetchParticipants();
  }, [fetchParticipants]);

  const [updatingStatusId, setUpdatingStatusId] = useState(null);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingStatusId(id);
    const token = localStorage.getItem("token") || "";

    try {
      const response = await fetch(`http://localhost:5000/api/admin/participants/${id}/status`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: newStatus.toLowerCase() })
      });

      if (response.ok) {
        setTeams(prevTeams =>
          prevTeams.map(team => (team.originalBatchId || team.id) === id ? { ...team, status: newStatus } : team)
        );
        if (newStatus === "Completed") {
          alert("Status changed and Certificate Email sent to Team Lead successfully!");
        }
      } else {
        const errorData = await response.json();
        alert(`Failed to update status: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Status update error:", error);
      alert("Network error: Could not update status.");
    } finally {
      setUpdatingStatusId(null);
    }
  };



  const filteredData = teams.filter((team) => {
    const search = searchTerm.toLowerCase();

    return (
      team.name.toLowerCase().includes(search) ||
      team.id.toLowerCase().includes(search) ||
      team.branch.toLowerCase().includes(search) ||
      team.register_number.toLowerCase().includes(search)
    );
  });

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('token');
    setIsAdmin(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>SIH 2026</h1>

      {/* Controls Container: Logout (Left) and Search (Right) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>

        {/* Left Side Container (Admin Logout) */}
        <div>
          {isAdmin && (
            <button
              onClick={handleLogout}
              style={{
                background: '#dc3545', // standard red danger color
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Logout Admin
            </button>
          )}
        </div>

        {/* Right Side Container (Search Bar) */}
        <div className={styles.searchContainer} style={{ margin: 0 }}>
          <input
            type="text"
            placeholder="Search teams, ID, branch..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Batch ID</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Register Number</th>
              <th>Faculty Assigned</th>
              <th>Date of Review</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="7" className={styles.noData} style={{ padding: '40px', fontSize: '1.2rem', color: '#6b7280' }}>
                  Loading participants...
                </td>
              </tr>
            ) : filteredData.length > 0 ? (
              filteredData.map((team) => (
                <tr key={team.id} style={{ transition: 'all 0.2s ease' }}>
                  <td data-label="Batch ID">{team.id}</td>
                  <td data-label="Name" className={styles.teamName}>{team.name}</td>
                  <td data-label="Branch">{team.branch}</td>
                  <td data-label="Register Number">{team.register_number}</td>
                  <td data-label="Faculty Assigned">{team.faculty}</td>
                  <td data-label="Date of Review">{team.date}</td>
                  <td data-label="Status">
                    {isAdmin ? (
                      <select
                        value={team.status}
                        onChange={(e) => handleStatusChange(team.originalBatchId || team.id, e.target.value)}
                        disabled={updatingStatusId === (team.originalBatchId || team.id)}
                        className={`${styles.statusDropdown} ${team.status === 'Completed' ? styles.completed : styles.pending
                          }`}
                        style={{ cursor: updatingStatusId === (team.originalBatchId || team.id) ? 'wait' : 'pointer' }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </select>
                    ) : (
                      <span
                        className={`${styles.statusBadge} ${team.status === 'Completed' ? styles.completed : styles.pending
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
                <td colSpan="7" className={styles.noData}>
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