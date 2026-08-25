import React, { useEffect, useState } from 'react';
import styles from './sih2026.module.css';
import { supabase } from '../../lib/supabase';

function Sih2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from('sih_2026_registrations')
        .select('*')
        .order('batch_id', { ascending: true });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('SIH registrations:', data);

      setTeams(data || []);
    } catch (error) {
      console.error('Failed to fetch SIH registrations:', error);
      setTeams([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = teams.filter((team) => {
    const search = searchTerm.toLowerCase();

    return (
      team.team_lead_name?.toLowerCase().includes(search) ||
      String(team.batch_id || '').toLowerCase().includes(search) ||
      team.branch?.toLowerCase().includes(search) ||
      team.register_number?.toLowerCase().includes(search)
    );
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>SIH 2026</h1>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search name, batch ID, branch..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
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
            {loading ? (
              <tr>
                <td colSpan="7" className={styles.noData}>
                  Loading teams...
                </td>
              </tr>
            ) : filteredData.length > 0 ? (
              filteredData.map((team) => (
                <tr key={team.id}>
                  <td data-label="Batch ID">
                    {team.batch_id}
                  </td>

                  <td
                    data-label="Name"
                    className={styles.teamName}
                  >
                    {team.team_lead_name}
                  </td>

                  <td data-label="Branch">
                    {team.branch || 'N/A'}
                  </td>

                  <td data-label="Register Number">
                    {team.register_number || 'N/A'}
                  </td>

                  <td data-label="Faculty Assigned">
                    {team.faculty_assigned || 'Not Assigned'}
                  </td>

                  <td data-label="Date of Review">
                    {team.review_date || 'Not Available'}
                  </td>

                  <td data-label="Status">
                    <span
                      className={`${styles.statusBadge} ${
                        team.review_status?.toLowerCase() === 'completed'
                          ? styles.completed
                          : styles.pending
                      }`}
                    >
                      {team.review_status || 'Pending'}
                    </span>
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