// src/services/PersonService.js

const API_URL = 'https://westbridge.in/api/people'; // Replace with your API

export const fetchPeople = async () => {

  try {
    const response = await fetch(API_URL);
    
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the response data
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching people:', error);
    throw error;
  }
};
