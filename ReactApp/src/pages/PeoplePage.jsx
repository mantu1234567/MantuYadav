// src/pages/PeoplePage.jsx
import React, { useState, useEffect } from 'react';

import './PeoplePage.css';
import { fetchPeople } from '../services/ApiService';
import Filter from '../components/Filter';
import PersonList from '../components/PersonList';

const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      try {
        const data = await fetchPeople();
        setPeople(data);
      } catch (error) {
        console.error('Failed to fetch people data');
      }
    };
    getPeople();
  }, []);

  useEffect(() => {
    if (filterType === 'all') {
      setFilteredPeople(people);
    } else {
      setFilteredPeople(people.filter((person) => person.type === filterType));
    }
  }, [filterType, people]);

  return (
    <div className="people-page-container">
      <h1>People List</h1>
      <Filter filterType={filterType} setFilterType={setFilterType} />
      <PersonList people={filteredPeople} />
    </div>
  );
};

export default PeoplePage;
